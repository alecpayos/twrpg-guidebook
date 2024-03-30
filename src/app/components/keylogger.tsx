import { useEffect, Dispatch, SetStateAction, useRef } from 'react'

/**
 * @todo -- Globalize
 * Add a callable for the handlekeydown handler instead
 * May be able to remove props
 * Only use/extend this component
 */
const KeyLogger = ({
  changeItemCategory,
  onKeyPress
}: {
  changeItemCategory: Dispatch<SetStateAction<string>>,
  onKeyPress: Dispatch<SetStateAction<string>>
}) => {
  const keysPressed = useRef('')

  const itemTabs = [
    'Icon','Weapon','Head','Armor','Accessory',
    'Wings','Mat','Misc','Pickaxe','Token',
    'Special','Food','Coin',
  ]
  
  useEffect(() => {
    const handleKeyDown = (event: any) => {
      const match = /[0-9]/.test(event.key)

      if (event.key.length == 1) {
        match
          ? changeItemCategory(itemTabs[event.key])
          : keysPressed.current += event.key

      } else if (event.key == 'Backspace') {
        keysPressed.current = keysPressed.current.slice(0, keysPressed.current.length - 1)
      }

      onKeyPress(keysPressed.current)
    }

    document.addEventListener("keydown", handleKeyDown)

    return () => document.removeEventListener("keydown", handleKeyDown)
  })

  return null
}

export default KeyLogger
