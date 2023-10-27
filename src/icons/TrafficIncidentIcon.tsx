export const TrafficIncidentIcon = ({
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
        d="M18.0144 11.1154C18.3891 10.9389 18.5497 10.492 18.3732 10.1173C18.1966 9.74258 17.7497 9.58197 17.375 9.75854L18.0144 11.1154ZM16.1803 10.3216C15.8056 10.4981 15.645 10.945 15.8216 11.3197C15.9981 11.6944 16.445 11.855 16.8197 11.6784L16.1803 10.3216ZM7.61683 18.9493C7.3453 19.2621 7.37876 19.7358 7.69157 20.0073C8.00437 20.2789 8.47806 20.2454 8.74959 19.9326L7.61683 18.9493ZM9.56638 18.9916C9.83791 18.6788 9.80445 18.2051 9.49164 17.9336C9.17884 17.6621 8.70515 17.6956 8.43362 18.0084L9.56638 18.9916ZM10.4919 13.9483C10.1872 14.2289 10.1677 14.7034 10.4483 15.0081C10.7289 15.3128 11.2034 15.3323 11.5081 15.0517L10.4919 13.9483ZM13.2085 13.4858C13.5132 13.2053 13.5327 12.7308 13.2521 12.4261C12.9715 12.1214 12.4971 12.1018 12.1924 12.3824L13.2085 13.4858ZM15.6695 7.92451L15.1392 8.45484L15.6695 7.92451ZM13.9378 6.19286L14.4682 5.66253L13.9378 6.19286ZM12.1701 9.87101C12.463 10.1639 12.9379 10.1639 13.2307 9.87101C13.5236 9.57811 13.5236 9.10324 13.2307 8.81035L12.1701 9.87101ZM11.7452 8.38548L12.2756 7.85515L11.7452 8.38548ZM12.6928 6.30296L12.1625 5.77263L12.1625 5.77263L12.6928 6.30296ZM11.8553 7.14046L12.3857 7.67079V7.67079L11.8553 7.14046ZM6.81034 15.2307C7.10324 15.5236 7.57811 15.5236 7.871 15.2307C8.1639 14.9379 8.1639 14.463 7.87101 14.1701L6.81034 15.2307ZM6.38548 13.7452L6.91581 13.2149L6.38548 13.7452ZM5.92451 17.6695L6.45484 17.1392H6.45484L5.92451 17.6695ZM4.19286 15.9378L4.72319 15.4075L4.19286 15.9378ZM5.14046 13.8553L4.61013 13.325L4.61013 13.325L5.14046 13.8553ZM4.30296 14.6928L4.83329 15.2232H4.83329L4.30296 14.6928ZM11.6596 20.9657C11.7841 20.5706 11.5647 20.1494 11.1697 20.0249C10.7746 19.9005 10.3534 20.1198 10.229 20.5149L11.6596 20.9657ZM9.99548 21.2559C9.87101 21.651 10.0904 22.0722 10.4854 22.1966C10.8805 22.3211 11.3017 22.1018 11.4262 21.7067L9.99548 21.2559ZM18.5149 12.229C18.1198 12.3534 17.9005 12.7746 18.0249 13.1697C18.1494 13.5647 18.5706 13.7841 18.9657 13.6596L18.5149 12.229ZM19.7067 13.4262C20.1018 13.3017 20.3211 12.8805 20.1966 12.4854C20.0722 12.0904 19.651 11.871 19.2559 11.9955L19.7067 13.4262ZM19.3697 15.1215L18.703 15.465L19.3697 15.1215ZM13.1215 21.3697L12.7781 22.0364V22.0364L13.1215 21.3697ZM18.9089 18.3587L18.3786 17.8284L18.9089 18.3587ZM19.9895 16.8949L20.732 17.0006L19.9895 16.8949ZM17.431 9.686L17.9613 9.15567L17.431 9.686ZM14.6721 7.78775L15.125 8.38554V8.38554L14.6721 7.78775ZM12.944 9.09705L12.4911 8.49926C12.4638 8.51995 12.4379 8.54249 12.4137 8.56672L12.944 9.09705ZM7.686 19.431L7.15567 19.9613L7.686 19.431ZM5.78775 16.6721L6.38554 17.125H6.38554L5.78775 16.6721ZM7.09705 14.944L6.56672 14.4137C6.54249 14.4379 6.51995 14.4638 6.49926 14.4911L7.09705 14.944ZM17.375 9.75854L16.1803 10.3216L16.8197 11.6784L18.0144 11.1154L17.375 9.75854ZM8.74959 19.9326L9.56638 18.9916L8.43362 18.0084L7.61683 18.9493L8.74959 19.9326ZM16.1998 7.39418L14.4682 5.66253L13.4075 6.72319L15.1392 8.45484L16.1998 7.39418ZM13.2307 8.81035L12.2756 7.85515L11.2149 8.91581L12.1701 9.87101L13.2307 8.81035ZM12.1625 5.77263L11.325 6.61013L12.3857 7.67079L13.2232 6.83329L12.1625 5.77263ZM7.87101 14.1701L6.91581 13.2149L5.85515 14.2756L6.81034 15.2307L7.87101 14.1701ZM6.45484 17.1392L4.72319 15.4075L3.66253 16.4682L5.39418 18.1998L6.45484 17.1392ZM4.61013 13.325L3.77263 14.1625L4.83329 15.2232L5.67079 14.3857L4.61013 13.325ZM10.229 20.5149L9.99548 21.2559L11.4262 21.7067L11.6596 20.9657L10.229 20.5149ZM18.9657 13.6596L19.7067 13.4262L19.2559 11.9955L18.5149 12.229L18.9657 13.6596ZM17.5762 13.2776L18.703 15.465L20.0364 14.7781L18.9096 12.5907L17.5762 13.2776ZM10.5907 20.9096L12.7781 22.0364L13.465 20.703L11.2776 19.5762L10.5907 20.9096ZM18.3786 17.8284L15.8284 20.3786L16.889 21.4393L19.4393 18.889L18.3786 17.8284ZM12.7781 22.0364C13.2053 22.2565 13.5796 22.4506 13.9043 22.5748C14.2452 22.7052 14.6034 22.7886 15.0006 22.732L14.7892 21.247C14.7396 21.254 14.6533 21.2553 14.4403 21.1738C14.2111 21.0861 13.9222 20.9385 13.465 20.703L12.7781 22.0364ZM15.8284 20.3786C15.4767 20.7303 15.2584 20.9468 15.0761 21.0904C14.9106 21.2207 14.8356 21.2404 14.7892 21.247L15.0006 22.732C15.401 22.675 15.719 22.4934 16.0041 22.2689C16.2726 22.0575 16.5628 21.7655 16.889 21.4393L15.8284 20.3786ZM18.703 15.465C18.9385 15.9222 19.0861 16.2111 19.1738 16.4403C19.2553 16.6533 19.254 16.7396 19.247 16.7892L20.732 17.0006C20.7886 16.6034 20.7052 16.2452 20.5748 15.9043C20.4506 15.5796 20.2565 15.2053 20.0364 14.7781L18.703 15.465ZM19.4393 18.889C19.7655 18.5628 20.0575 18.2725 20.2689 18.0041C20.4934 17.719 20.675 17.401 20.732 17.0006L19.247 16.7892C19.2404 16.8356 19.2207 16.9106 19.0904 17.0761C18.9468 17.2584 18.7303 17.4767 18.3786 17.8284L19.4393 18.889ZM17.9613 9.15567L16.1998 7.39418L15.1392 8.45484L16.9007 10.2163L17.9613 9.15567ZM14.2192 7.18996L12.4911 8.49926L13.397 9.69484L15.125 8.38554L14.2192 7.18996ZM8.21633 18.9007L6.45484 17.1392L5.39418 18.1998L7.15567 19.9613L8.21633 18.9007ZM6.38554 17.125L7.69484 15.397L6.49926 14.4911L5.18996 16.2192L6.38554 17.125ZM12.4137 8.56672L6.56672 14.4137L7.62738 15.4744L13.4744 9.62738L12.4137 8.56672ZM17.7126 12.4038L10.4038 19.7126L11.4645 20.7732L18.7732 13.4645L17.7126 12.4038ZM6.45484 17.1392C6.42169 17.106 6.41268 17.0754 6.41127 17.065C6.41067 17.0607 6.41203 17.0648 6.4093 17.0764C6.40638 17.0889 6.39938 17.1068 6.38554 17.125L5.18996 16.2192C4.70002 16.8658 4.90573 17.7114 5.39418 18.1998L6.45484 17.1392ZM16.1998 7.39418C15.7114 6.90573 14.8658 6.70002 14.2192 7.18996L15.125 8.38554C15.1068 8.39938 15.0889 8.40638 15.0764 8.4093C15.0648 8.41203 15.0607 8.41067 15.065 8.41127C15.0754 8.41268 15.106 8.42169 15.1392 8.45484L16.1998 7.39418ZM18.992 12.8975C18.9702 12.4519 18.965 11.7658 18.8587 11.1201C18.7519 10.4714 18.5248 9.71918 17.9613 9.15567L16.9007 10.2163C17.1364 10.4521 17.2913 10.8335 17.3786 11.3638C17.4664 11.8973 17.4676 12.4355 17.4938 12.9708L18.992 12.8975ZM10.9708 19.4938C10.4355 19.4676 9.89726 19.4664 9.36382 19.3786C8.83348 19.2913 8.45206 19.1364 8.21633 18.9007L7.15567 19.9613C7.71918 20.5248 8.47141 20.7519 9.12013 20.8587C9.76575 20.965 10.4519 20.9702 10.8975 20.992L10.9708 19.4938ZM14.4682 5.66253C14.0911 5.28541 13.5967 5.21387 13.2089 5.26486C12.8245 5.3154 12.4406 5.49457 12.1625 5.77263L13.2232 6.83329C13.2338 6.82262 13.2577 6.80358 13.2954 6.78545C13.3327 6.76757 13.3713 6.75642 13.4044 6.75207C13.4379 6.74766 13.4531 6.75173 13.4514 6.75127C13.4465 6.74993 13.4269 6.74258 13.4075 6.72319L14.4682 5.66253ZM12.2756 7.85515C12.2949 7.87454 12.3023 7.89409 12.3036 7.89906C12.3041 7.90076 12.3 7.88555 12.3044 7.85202C12.3088 7.81891 12.3199 7.78029 12.3378 7.74307C12.356 7.70533 12.375 7.68146 12.3857 7.67079L11.325 6.61013C11.0469 6.88819 10.8678 7.27209 10.8172 7.65649C10.7662 8.04434 10.8378 8.5387 11.2149 8.91581L12.2756 7.85515ZM6.91581 13.2149C6.53869 12.8378 6.04434 12.7662 5.65649 12.8172C5.27209 12.8678 4.88819 13.0469 4.61013 13.325L5.67079 14.3857C5.68146 14.375 5.70533 14.356 5.74307 14.3378C5.78029 14.3199 5.8189 14.3088 5.85202 14.3044C5.88555 14.3 5.90076 14.3041 5.89906 14.3036C5.89409 14.3023 5.87454 14.2949 5.85515 14.2756L6.91581 13.2149ZM4.72319 15.4075C4.74258 15.4269 4.74993 15.4465 4.75127 15.4514C4.75173 15.4531 4.74766 15.4379 4.75207 15.4044C4.75642 15.3713 4.76757 15.3327 4.78545 15.2954C4.80358 15.2577 4.82262 15.2338 4.83329 15.2232L3.77263 14.1625C3.49457 14.4406 3.3154 14.8245 3.26486 15.2089C3.21387 15.5967 3.28541 16.0911 3.66253 16.4682L4.72319 15.4075ZM11.5081 15.0517L13.2085 13.4858L12.1924 12.3824L10.4919 13.9483L11.5081 15.0517Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M3 2H21"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
