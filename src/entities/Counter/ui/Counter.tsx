import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'shared/ui/Button/Button'
import { counterActions } from '../model/slice/counterSlice'
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue'
import { useTranslation } from 'react-i18next'

export const Counter = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const initialValue = useSelector(getCounterValue)

  const increment = () => {
    dispatch(counterActions.increment())
  }

  const decrement = () => {
    dispatch(counterActions.decrement())
  }

  return (
    <div>
      <h1 data-testid="value-title">{initialValue}</h1>
      <Button onClick={increment}>{t('increment')}</Button>
      <Button onClick={decrement}>{t('decrement')}</Button>
    </div>
  )
}
