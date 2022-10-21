import { Menu } from '@headlessui/react'
import clsx from 'clsx'
import { ComponentProps } from 'react'
import { Link, LinkProps } from 'react-router-dom'

type Props = {
  name: string
} & (({ type: 'link' } & LinkProps) | ({ type: 'button' } & ComponentProps<'button'>))

export default function HeaderMenuItem({ name, type, ...props }: Props) {
  const ButtonOrLink = type === 'button' ? 'button' : Link

  return (
    <Menu.Item>
      {({ active }) => (
        <ButtonOrLink
          {...(props as any)}
          className={clsx(
            'block w-full rounded-md p-2 text-left',
            active && 'bg-indigo-500 text-white',
            props.className
          )}
        >
          {name}
        </ButtonOrLink>
      )}
    </Menu.Item>
  )
}
