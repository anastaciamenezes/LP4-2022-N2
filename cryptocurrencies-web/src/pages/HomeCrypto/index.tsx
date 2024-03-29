import { useContext, useEffect, useState } from 'react'
import ReactLoading from 'react-loading'

import CryptoCard from '../../components/CryptoCard'
import { VsCurrencyContext } from '../../context/VsCurrencyContext'
import Price from '../../models/Price'
import CurrencyService from '../../services/CurrencyService'
import { Container, Filter, LoadingArea } from './styles'

const Home = () => {
  /**
   * Utilizaremos um hook chamado useState
   * para armazenar valores dentro do estado
   * do componente
   */
  const [prices, setPrices] = useState<Price[]>([])
  const [pricesToBeDisplayed, setPricesToBeDisplayed] = useState<Price[]>([])
  const [isListLoaded, setIsListLoaded] = useState<boolean>(false)

  const { vsCurrency } = useContext(VsCurrencyContext)

  const currencyService = new CurrencyService()

  const loadPrices = async () => {
    setIsListLoaded(false)
    let currentPrices = await currencyService.getPrices(vsCurrency)
    setPrices(currentPrices)
    setPricesToBeDisplayed(currentPrices)
    setIsListLoaded(true)
  }

  /**
   * Utilizaremos um hook chamado useEffect para
   * invocar o service de preços para nos trazer os
   * preços atuais assim que o componente Home for
   * renderizado. Isto deverá ocorrer apenas uma vez
   * após a renderização do componente.
   */
  useEffect(() => {
    loadPrices()
  }, [vsCurrency])

  const renderCryptoCard = (price: Price) => (
    <CryptoCard
      key={price.id}
      id={price.id}
      title={price.name}
      logo={price.image}
      price={price.currentPrice}
      priceChange={price.priceChange}
    />
  )

  const filterPrices = (filter: string) => {
    if (filter) {
      const filteredPrices = prices.filter((p) =>
        p.name.toLowerCase().includes(filter.toLowerCase())
      )

      setPricesToBeDisplayed(filteredPrices)
    } else {
      setPricesToBeDisplayed(prices)
    }
  }

  return (
    <Container>
      {isListLoaded && (
        <div>
          <Filter
            placeholder='Type desired cryptocurrency'
            onChange={(e) => filterPrices(e.currentTarget.value)}
            data-testid='filter-input'
          />
          {pricesToBeDisplayed.map((p) => renderCryptoCard(p))}
        </div>
      )}

      {!isListLoaded && (
        <LoadingArea data-testid='loading-area'>
          <ReactLoading type='spin' color='#8c14fc' width={'100%'} />
        </LoadingArea>
      )}
    </Container>
  )
}

export default Home