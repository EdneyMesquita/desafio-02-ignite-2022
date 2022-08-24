import { Minus, Plus } from 'phosphor-react'
import { ChangeEvent, useEffect, useState } from 'react'
import { CounterContainer, Input } from './styles'

interface CounterProps {
  defaultValue?: number
  onValueChange: (value: number) => void
}

export function Counter({ defaultValue = 0, onValueChange }: CounterProps) {
  const [value, setValue] = useState(defaultValue)

  useEffect(() => {
    onValueChange(value)
  }, [value, onValueChange])

  function increment() {
    setValue((state) => {
      if (state < 10) return state + 1
      return state
    })
  }

  function decrement() {
    setValue((state) => {
      if (state > 0) return state - 1
      return state
    })
  }

  function handleValueChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(Number(event.target.value))
  }

  return (
    <CounterContainer>
      <button onClick={decrement}>
        <Minus weight="fill" />
      </button>
      <Input
        type="number"
        min={1}
        max={10}
        value={value}
        onChange={handleValueChange}
      />
      <button onClick={increment}>
        <Plus weight="fill" />
      </button>
    </CounterContainer>
  )
}
