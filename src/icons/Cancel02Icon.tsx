export const Cancel02Icon = ({
  color = 'white',
  strokeWidth = 1.5,
  size = 24
}: {
  color?: string
  strokeWidth?: number
  size?: number
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`text-${color} stroke-current`}
    >
      <path
        d="M17.2624 10.2459L19.0165 8.49174C19.4244 8.08391 19.6283 7.88 19.7507 7.66787C20.0831 7.09222 20.0831 6.38299 19.7507 5.80733C19.6283 5.59521 19.4244 5.3913 19.0165 4.98347C18.6087 4.57565 18.4048 4.37174 18.1927 4.24927C17.617 3.91691 16.9078 3.91691 16.3321 4.24926C16.12 4.37174 15.9161 4.57565 15.5083 4.98347L13.7541 6.7376C12.9272 7.56451 12.5138 7.97796 12 7.97796C11.4862 7.97796 11.0728 7.56451 10.2459 6.7376L8.49174 4.98347C8.08391 4.57565 7.88 4.37174 7.66787 4.24926C7.09222 3.91691 6.38299 3.91691 5.80734 4.24926C5.59521 4.37174 5.3913 4.57565 4.98347 4.98347C4.57565 5.3913 4.37174 5.59521 4.24927 5.80734C3.91691 6.38299 3.91691 7.09222 4.24926 7.66787C4.37174 7.88 4.57565 8.08391 4.98347 8.49174L6.7376 10.2459C7.56451 11.0728 7.97796 11.4862 7.97796 12C7.97796 12.5138 7.56451 12.9272 6.7376 13.7541L4.98347 15.5083C4.57565 15.9161 4.37174 16.12 4.24926 16.3321C3.91691 16.9078 3.91691 17.617 4.24926 18.1927C4.37174 18.4048 4.57565 18.6087 4.98347 19.0165C5.3913 19.4244 5.59521 19.6283 5.80733 19.7507C6.38299 20.0831 7.09222 20.0831 7.66787 19.7507C7.88 19.6283 8.08391 19.4244 8.49174 19.0165L10.2459 17.2624C11.0728 16.4355 11.4862 16.022 12 16.022C12.5138 16.022 12.9272 16.4355 13.7541 17.2624L15.5083 19.0165C15.9161 19.4244 16.12 19.6283 16.3321 19.7507C16.9078 20.0831 17.617 20.0831 18.1927 19.7507C18.4048 19.6283 18.6087 19.4244 19.0165 19.0165C19.4244 18.6087 19.6283 18.4048 19.7507 18.1927C20.0831 17.617 20.0831 16.9078 19.7507 16.3321C19.6283 16.12 19.4244 15.9161 19.0165 15.5083L17.2624 13.7541C16.4355 12.9272 16.022 12.5138 16.022 12C16.022 11.4862 16.4355 11.0728 17.2624 10.2459Z"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
