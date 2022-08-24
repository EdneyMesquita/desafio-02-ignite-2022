import {
  CoffeeList,
  CoffeeListContainer,
  HomeContainer,
  List,
  ListIcon,
  PresentationContainer,
} from './styles'

import coffeesList from './coffees.json'

import { CoffeeCard } from '../../components/CoffeeCard'

import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import coffeeRight from '../../assets/coffee-right.png'

import { Coffee as CoffeeData } from '../../interfaces/coffee'

export function Home() {
  const coffees: CoffeeData[] = coffeesList

  return (
    <HomeContainer>
      <PresentationContainer>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <List>
            <li>
              <ListIcon>
                <ShoppingCart weight="fill" size={16} />
              </ListIcon>
              Compra simples e segura
            </li>
            <li>
              <ListIcon>
                <Timer weight="fill" size={16} />
              </ListIcon>
              Entrega rápida e rastreada
            </li>
            <li>
              <ListIcon>
                <Package weight="fill" size={16} />
              </ListIcon>
              Embalagem mantém o café intacto
            </li>
            <li>
              <ListIcon>
                <Coffee weight="fill" size={16} />
              </ListIcon>
              O café chega fresquinho até você
            </li>
          </List>
        </div>

        <img src={coffeeRight} alt="" />
      </PresentationContainer>

      <CoffeeListContainer>
        <h1>Nossos cafés</h1>

        <CoffeeList>
          {coffees.map((item) => (
            <CoffeeCard key={item.id} data={item} />
          ))}
        </CoffeeList>
      </CoffeeListContainer>
    </HomeContainer>
  )
}
