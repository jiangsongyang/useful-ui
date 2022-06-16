import { useToggle } from '../../../../composable'

export const useFocus = () => {
  const [focused, setFocused] = useToggle(false)

  const handleFocus = () => {
    setFocused()
  }
  const handleBlur = () => {
    setFocused()
  }
  return {
    focused,
    handleFocus,
    handleBlur
  }
}
