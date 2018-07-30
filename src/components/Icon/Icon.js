import React from 'react';

const Icon = ({ type, size, style, className }) => {
  // prettier-ignore
  const icons = {
    beetle: { width:'1em', height:'1em', viewbox: '1024 1024', path: <g><path d="M785.84 231.511v.001h-.013zm0 .001h66.119v225.255H720.536v58.376h131.437v225.214h-66.146V582.145h-58.376v216.587h124.536v225.269h-66.146V865.762h-58.376v37.884c-.009 41.172-33.388 74.546-74.562 74.546H541.187V810.443c77.577-13.829 136.542-81.475 136.542-163.036 0-81.532-58.979-149.18-136.542-163.009v-94.675H785.84zm-547.681-.001v158.212h244.653v94.675c-77.577 13.829-136.528 81.477-136.528 163.009 0 81.561 58.951 149.207 136.528 163.036v167.749H371.096c-41.174 0-74.553-33.374-74.562-74.546v-37.884h-58.376v158.239h-66.146V798.732h124.522V582.145h-58.376v158.212h-66.146V515.143h131.423v-58.376H172.012V231.512h66.146zm303.013 312.022c45.443 12.708 78.825 54.352 78.825 103.876 0 49.524-33.381 91.14-78.825 103.903l.761-.19a107.791 107.791 0 0 1-29.934 4.256h-.008c-10.386-.014-20.427-1.5-29.166-4.068C437.382 738.547 404 696.918 404 647.407c0-49.526 33.381-91.154 78.825-103.876l-.757.19a107.169 107.169 0 0 1 29.931-4.3h.012c10.387.022 20.426 1.521 29.162 4.109zM753.539 0v50.269h-26.088l-.01.352c-1.258 37.636-12.214 72.814-29.908 102.149l-.547.985c-13.31 22.211-30.487 41.84-51.026 58.289v82.024h-16.41v57.745H394.42v-57.745h-16.396v-82.024l-.428-.331c-19.955-15.983-37.018-35.427-50.822-58.395l.536.953c-18.442-30.416-29.521-65.791-30.777-104.001h-26.088V.001h133.568V50.27H365.75l.012.328c3.015 63.739 46.916 116.776 107.089 133.716 12.469 3.464 25.569 5.428 39.146 5.428h.021c13.93-.036 27.401-2.016 39.126-5.428l1.028-.248c59.145-16.691 103.047-69.729 106.074-133.797h-38.248V0z" fill="#222"/><path d="M544.371 597.123c-9.133-6.02-20.332-9.609-32.369-9.622h-.003c-12.036.019-23.231 3.611-32.581 9.774l.223-.138c-16.642 10.782-27.503 29.255-27.518 50.266v.002c.015 21.013 10.876 39.486 27.286 50.127l.233.142c9.13 6.015 20.323 9.602 32.352 9.622h.005c11.95 0 23.03-3.605 32.372-9.622 16.647-10.779 27.509-29.254 27.518-50.267v-.001c-.007-21.015-10.871-39.492-27.285-50.127l-.233-.142z" fill="#28aae1"/></g>},
    bionicbeetle: { width:'1em', height:'0.25em', viewbox: '4096 1024', path: <g><path d="M900.66 741.437c0 6.231.362 11.054 1.096 14.541.724 3.455 1.822 6.097 3.292 7.94 2.898 3.28 6.829 5.1 11.768 5.475 4.937.35 8.858.538 11.789.538h113.957c5.827 0 12.958-.641 21.362-1.916a32.712 32.712 0 0 0 20.78-11.721l.047-.057c4.015-5.111 6.676-11.313 7.94-18.631 1.283-7.308 1.926-14.055 1.926-20.277 0-5.474-.466-12.058-1.368-19.717-.933-7.689-3.208-14.066-6.841-19.189-2.193-2.928-6.315-6.305-12.348-10.124-6.024-3.84-14.884-5.776-26.557-5.776H900.664zm0-136.442h140.245c7.319 0 14.439-.539 21.394-1.635 6.925-1.097 12.938-5.111 18.073-12.059 1.448-1.83 3.178-5.475 5.196-10.972 2.019-5.486 3.024-14.789 3.024-27.969 0-5.111-.549-11.777-1.656-19.975a34.539 34.539 0 0 0-10.927-21.091l-.025-.023c-5.124-5.111-10.774-8.021-16.996-8.765a160.344 160.344 0 0 0-18.611-1.096H922.032c-2.924.009-5.848.102-8.766.281-2.927.177-5.485 1.563-7.678 4.109a17.595 17.595 0 0 0-4.093 8.662l-.016.104a49.51 49.51 0 0 0-.826 8.175v.054zm168.75-161.111c5.111 0 10.682.186 16.715.528 6.733.455 12.995 1.534 19.019 3.189l-.667-.157c6.889 1.855 12.894 4.292 18.51 7.351l-.44-.22c6.303 3.428 11.714 7.524 16.428 12.309l.008.008a61.95 61.95 0 0 1 12.729 18.255l.156.386a113.882 113.882 0 0 1 7.12 21.353 151.69 151.69 0 0 1 3.292 21.921c.548 7.327.82 14.043.82 20.285 0 10.588-.933 21.094-2.741 31.527-1.822 10.415-6.945 20.731-15.337 30.968-5.487 6.581-11.042 11.313-16.707 14.23-5.672 2.939-12.162 4.761-19.458 5.486v2.193c9.139.747 17.264 3.013 24.384 6.853 6.862 3.638 12.736 8.108 17.78 13.377l.026.027a68.43 68.43 0 0 1 10.234 15.746l.175.419c2.353 5.053 4.253 10.932 5.413 17.074l.074.47a124.364 124.364 0 0 1 1.916 17.801c.185 5.857.266 11.51.266 16.986 0 12.803-.91 26.309-2.741 40.552-1.822 14.241-8.208 27.594-19.17 40.003-5.484 6.232-11.146 10.964-16.987 14.264-5.027 2.92-10.844 5.437-16.961 7.244l-.568.145c-5.291 1.566-11.396 2.557-17.703 2.751l-.111.002c-5.292.165-11.512.258-17.756.258H893.541c-9.521 0-18.641-.351-27.406-1.087-8.765-.737-16.986-5.485-24.654-14.262-1.831-2.184-4.47-6.47-7.951-12.875-3.466-6.386-5.196-15.081-5.196-26.042V499.21c0-7.298.994-14.428 3.003-21.352 1.958-6.929 5.063-12.966 9.135-18.212l-.089.119c5.837-6.925 12.513-11.313 19.997-13.166 7.495-1.811 14.336-2.722 20.556-2.722zm143.535 0h64.099v50.945h-64.099zm0 93.155h64.099v290.447h-64.099zm169.019 184.13c1.644 13.517 7.036 25.566 16.166 36.166 9.491 10.599 20.545 17.264 33.153 20.008 10.923 2.541 23.487 4.03 36.387 4.099h.047c12.048 0 24.178-1.368 36.424-4.099 12.235-2.742 23.1-9.407 32.603-20.008 9.493-10.597 15.071-22.481 16.715-35.616a313.595 313.595 0 0 0 2.456-38.908v-17.524c0-6.582-.539-13.332-1.636-20.277-1.253-7.755-3.163-14.665-5.727-21.248l.24.703c-2.752-7.106-6.646-13.201-11.513-18.363l-.001-.002.001.002c.003 0 .003.002.004.002l-.013-.014c.001.004.004.006.008.01a62.191 62.191 0 0 0-15.307-12.172l-.309-.162c-5.023-2.825-10.839-5.254-16.952-6.982l-.569-.138c-5.375-1.527-11.641-2.605-18.088-3.01l-.263-.011a310.394 310.394 0 0 0-18.073-.55c-5.124 0-10.889.187-17.263.55a96.769 96.769 0 0 0-19.576 3.179l.677-.157c-7.02 1.908-13.121 4.339-18.86 7.362l.501-.239c-6.131 3.18-11.315 7.32-15.571 12.278l-.057.068a58.687 58.687 0 0 0-10.272 17.673l-.131.409c-2.311 6.022-4.222 13.117-5.402 20.458l-.083.628c-.994 6.004-1.672 13.088-1.888 20.294l-.007.243a559.668 559.668 0 0 0-.28 16.942v.055c0 12.046.819 24.852 2.475 38.358zm155.328-115.053l-.001-.002.001.002zm-41.09-71.833c11.358.448 22.095 1.725 32.553 3.777l-1.326-.217c11.629 2.241 21.907 5.464 31.646 9.69l-.968-.376c10.336 4.478 19.215 10.285 26.931 17.34l-.073-.065a86.935 86.935 0 0 1 19.749 26.615l.227.523c4.405 8.965 8.258 19.458 11.001 30.393l.237 1.122c2.314 9.018 4.067 19.683 4.898 30.604l.04.645c.715 10.206 1.097 19.16 1.097 26.828 0 31.06-3.562 55.996-10.683 74.812-7.109 18.795-15.99 33.327-26.57 43.553a86.68 86.68 0 0 1-25.998 17.051l-.568.215c-8.933 3.859-19.41 7.086-30.291 9.17l-.969.154c-9.017 1.79-19.826 3.154-30.828 3.799l-.669.03c-8.269.497-18.021.795-27.837.828h-.089c-8.765 0-18.27-.28-28.493-.828-11.557-.662-22.275-2.027-32.745-4.076l1.51.246c-11.624-2.233-21.902-5.458-31.637-9.698l.958.371c-10.332-4.455-19.206-10.261-26.909-17.326l.067.064a90.473 90.473 0 0 1-20.321-26.892l-.236-.526c-4.499-9.028-8.268-19.538-10.766-30.529l-.185-.958c-2.117-8.931-3.77-19.607-4.612-30.509l-.045-.738c-.642-7.693-1.039-16.761-1.097-25.911v-.121c0-8.021.362-17.346 1.097-27.925.725-10.587 2.37-21.279 4.927-32.043 2.94-12.15 6.789-22.747 11.65-32.763l-.421.956c5.061-10.608 11.782-19.613 19.942-27.078l.066-.057a95.263 95.263 0 0 1 26.224-17.036l.614-.237a149.29 149.29 0 0 1 30.678-9.313c10.598-2 21-3.19 31.237-3.562 10.226-.34 19.728-.538 28.493-.538 8.755 0 18.256.198 28.482.538zm162.177 47.148c0-4.389.445-9.492 1.368-15.337.898-5.847 3.561-11.159 7.949-15.919 6.212-6.915 13.609-10.858 22.19-11.759 8.582-.91 15.981-1.377 22.191-1.377h102.437c15.337 0 29.756 1.295 43.295 3.818 13.506 2.588 26.102 9.16 37.78 19.737 7.678 6.957 14.355 16.261 20.027 27.969 5.641 11.698 8.479 27.595 8.479 47.685V827.48h-64.098V655.426c0-9.5-.747-18.723-2.193-27.666-1.437-9.077-4.923-17.147-9.969-23.998l.106.149c-4.531-5.979-10.556-10.599-17.527-13.34l-.275-.097c-7.141-2.743-16.551-4.1-28.226-4.1h-65.197c-1.822 0-3.654.083-5.476.268-1.831.186-3.654 1.179-5.485 3.012a9.543 9.543 0 0 0-2.997 5.993l-.002.04a66.22 66.22 0 0 0-.281 6.02v225.765h-64.098zm309.534-137.547h64.079v50.945h-64.079zm0 93.155h64.079v290.447h-64.079zm213.088 290.434c-5.456 0-11.852-.34-19.16-1.076-7.318-.756-14.801-2.38-22.458-4.96-7.67-2.537-15.443-6.211-23.288-10.949-8.359-5.175-15.498-11.358-21.535-18.499l-.109-.13c-12.047-14.264-19.437-30.222-22.19-47.942-2.732-17.719-4.109-36.981-4.109-57.806 0-8.776.186-18.279.537-28.505a183.437 183.437 0 0 1 3.851-30.947c2.173-10.415 5.476-20.626 9.866-30.688 4.786-10.7 11.041-19.86 18.645-27.714 2.914-2.911 6.747-6.206 11.484-9.849 4.742-3.645 10.692-7.038 17.803-10.143 7.12-3.086 15.525-5.745 25.212-7.94 9.668-2.193 21.084-3.292 34.24-3.292h124.348v49.338h-103.544c-21.548 0-37.894 4.575-49.018 13.693-11.158 9.149-18.548 19.923-22.191 32.333-1.096 4.037-2.018 8.684-2.741 13.973-.661 4.551-1.158 10.041-1.368 15.601l-.009.299c-.177 5.28-.351 10.206-.528 14.779-.209 4.553-.292 7.94-.292 10.133 0 4.378.093 9.223.292 14.532.175 5.279.621 10.691 1.366 16.146a153.497 153.497 0 0 0 3.003 16.186c1.283 5.3 2.825 9.771 4.659 13.426 3.654 6.934 8.217 12.399 13.703 16.423a64.068 64.068 0 0 0 17.626 9.184l.457.135c6.02 2.074 13.006 3.535 20.245 4.091l.288.018c7.131.548 13.974.829 20.546.829h104.092v49.32zm-79.976-259.19c-.008.008.008-.008 0 0zm466.763 173.154c0 6.231.371 11.054 1.097 14.541.746 3.455 1.842 6.097 3.301 7.94 2.898 3.28 6.829 5.1 11.777 5.475 4.928.35 8.849.538 11.769.538h113.958c5.847 0 12.992-.641 21.383-1.916a32.706 32.706 0 0 0 20.759-11.721l.048-.057c4.036-5.111 6.676-11.313 7.958-18.631 1.283-7.308 1.916-14.055 1.916-20.277 0-5.474-.455-12.058-1.377-19.717-.889-7.689-3.209-14.066-6.841-19.189-2.194-2.928-6.292-6.305-12.327-10.124-6.023-3.84-14.903-5.776-26.57-5.776h-146.85zm0-136.442h140.276c7.31 0 14.419-.539 21.353-1.635 6.936-1.097 12.969-5.111 18.084-12.059 1.47-1.83 3.208-5.475 5.216-10.972 2.009-5.486 3.003-14.789 3.003-27.969 0-5.111-.539-11.777-1.635-19.975a34.407 34.407 0 0 0-10.945-21.09l-.028-.025c-5.111-5.111-10.765-8.021-16.976-8.765a160.694 160.694 0 0 0-18.632-1.098H2589.15c-2.918 0-5.828.113-8.755.282-2.928.176-5.485 1.564-7.658 4.109a17.593 17.593 0 0 0-4.095 8.663l-.016.102a49.967 49.967 0 0 0-.825 8.176v.056zm168.769-161.111c5.102 0 10.683.186 16.705.528 6.733.455 12.997 1.534 19.021 3.189l-.668-.157c6.896 1.863 12.903 4.296 18.526 7.355l-.446-.22c6.297 3.432 11.703 7.528 16.419 12.309l.008.008a61.982 61.982 0 0 1 12.728 18.253l.157.388a112.713 112.713 0 0 1 7.12 21.353 150.234 150.234 0 0 1 3.28 21.921c.558 7.327.818 14.043.818 20.285 0 10.588-.889 21.094-2.731 31.527-1.821 10.415-6.934 20.731-15.337 30.968-5.485 6.581-11.042 11.313-16.705 14.23-5.664 2.939-12.162 4.761-19.458 5.486v2.193c9.139.747 17.262 3.013 24.394 6.853 6.862 3.638 12.729 8.108 17.767 13.377l.025.026a68.18 68.18 0 0 1 10.246 15.747l.177.419c2.34 5.049 4.234 10.929 5.4 17.069l.075.476c1.087 6.024 1.748 11.974 1.916 17.801.186 5.858.267 11.512.267 16.987 0 12.804-.898 26.31-2.732 40.552-1.843 14.24-8.216 27.594-19.189 40.004-5.465 6.231-11.136 10.962-16.976 14.262-5.031 2.923-10.849 5.438-16.977 7.247l-.568.145c-5.289 1.57-11.391 2.561-17.693 2.751l-.109.002c-5.298.165-11.525.258-17.775.258h-183.56c-9.52 0-18.63-.351-27.405-1.087-8.765-.735-16.986-5.485-24.655-14.263-1.821-2.183-4.469-6.469-7.94-12.874-3.466-6.386-5.205-15.081-5.205-26.042V499.218a76.661 76.661 0 0 1 3.002-21.352c2.02-6.945 5.032-12.958 9.056-18.093 5.828-6.925 12.503-11.313 19.976-13.166 6.142-1.635 13.214-2.621 20.504-2.722h.062zm335.289 210.45c6.211 0 10.142-1.852 11.788-5.485a27.864 27.864 0 0 0 2.465-11.521c0-9.109-1.927-16.976-5.756-23.548-3.849-6.581-8.135-11.707-12.873-15.361-8.044-6.211-16.904-9.945-26.557-11.22-9.698-1.272-19.107-1.925-28.237-1.925-4.388 0-9.129.082-14.23.267-5.783.244-11.246.93-16.55 2.039l.651-.113c-6.093 1.258-11.496 3.246-16.484 5.913l.327-.158c-5.635 2.996-10.438 6.745-14.495 11.188l-.037.038c-6.572 7.319-10.319 15.071-11.229 23.3-.933 8.216-1.552 17.077-1.904 26.581zm-89.86 173.148c-7.298 0-14.976-.266-22.997-.838-8.619-.595-16.642-2.247-24.235-4.834l.667.198c-8.571-2.954-16.003-6.762-22.778-11.451l.304.199c-7.308-4.927-13.87-11.58-19.708-20.006-9.502-13.881-15.337-30.131-17.534-48.761-2.094-16.967-3.292-36.601-3.292-56.519v-.481c0-13.507.268-26.207.829-38.068.539-11.861 2.01-22.811 4.369-32.882 2.379-10.03 5.837-19.273 10.424-27.668 4.554-8.424 10.858-16.083 18.899-23.038a87.467 87.467 0 0 1 25.981-15.685l.599-.203c9.668-3.654 19.447-6.314 29.291-7.96 9.866-1.645 19.356-2.639 28.505-3.013 9.13-.34 17.17-.537 24.106-.537h.382c17.728 0 35.202 1.098 52.351 3.228l-2.047-.208c16.621 1.999 31.692 7.203 45.211 15.598 8.383 5.496 15.234 11.707 20.536 18.652a88.445 88.445 0 0 1 12.389 22.138l.208.612a110.073 110.073 0 0 1 6.315 25.761 225.137 225.137 0 0 1 1.625 27.129c0 7.308-.724 14.874-2.193 22.738-1.448 7.835-5.289 14.874-11.49 21.075-4.389 4.388-9.232 7.317-14.511 8.789-4.945 1.388-10.622 2.183-16.485 2.183h-168.982c0 6.221.35 13.341 1.087 21.362.724 8.043 1.644 14.241 2.73 18.632 2.194 7.669 5.309 13.787 9.315 18.35a40.02 40.02 0 0 0 13.997 10.323l.255.101c5.027 2.237 10.86 3.872 16.966 4.616l.299.029c5.339.703 11.517 1.105 17.79 1.107h141.926v49.33zm398.327-173.148c6.202 0 10.134-1.852 11.788-5.485a27.996 27.996 0 0 0 2.455-11.521c0-9.109-1.925-16.976-5.755-23.548-3.83-6.581-8.124-11.707-12.874-15.361a54.029 54.029 0 0 0-26.288-11.188l-.284-.029c-8.452-1.198-18.239-1.899-28.181-1.927h-.033c-4.389 0-9.15.084-14.253.267-5.561.224-11.094.907-16.541 2.039l.656-.112c-6.088 1.255-11.488 3.244-16.47 5.912l.322-.158c-5.637 2.995-10.441 6.744-14.493 11.188l-.038.04c-6.582 7.318-10.329 15.069-11.25 23.298-.849 7.39-1.531 16.589-1.883 25.877l-.018.704zm-89.858 173.148c-7.31 0-14.978-.266-23.011-.838-8.616-.595-16.641-2.245-24.233-4.834l.667.198c-8.565-2.954-15.994-6.762-22.765-11.451l.307.199c-7.31-4.927-13.882-11.58-19.719-20.006-9.501-13.881-15.337-30.131-17.534-48.761-2.111-17.018-3.313-36.717-3.313-56.694v-.304c0-13.506.3-26.207.858-38.069.519-11.86 1.985-22.811 4.368-32.881 2.381-10.029 5.838-19.272 10.403-27.667 4.552-8.424 10.868-16.083 18.898-23.04a87.921 87.921 0 0 1 25.989-15.682l.603-.203c9.667-3.654 19.446-6.314 29.29-7.96 9.876-1.645 19.375-2.639 28.505-3.013 9.129-.34 17.17-.537 24.116-.537 17.16 0 34.041 1.003 50.663 3.022 16.632 2 31.692 7.204 45.211 15.599 8.385 5.494 15.246 11.707 20.547 18.65a88.336 88.336 0 0 1 12.401 22.141l.204.609a111.142 111.142 0 0 1 6.293 25.761c1.107 8.963 1.635 17.991 1.635 27.129 0 7.31-.735 14.874-2.194 22.74-1.447 7.835-5.29 14.874-11.498 21.073-4.389 4.389-9.223 7.319-14.512 8.789-4.933 1.388-10.599 2.184-16.45 2.184h-169.015c0 6.222.371 13.342 1.096 21.363.724 8.042 1.645 14.241 2.753 18.63 2.173 7.669 5.28 13.787 9.304 18.35a40.14 40.14 0 0 0 13.976 10.323l.254.101c5.027 2.233 10.858 3.872 16.967 4.616l.299.031c5.343.7 11.523 1.104 17.798 1.106h141.906v49.329zm331.475-.009c-19.729 0-35.346-1.718-46.858-5.196-11.88-3.579-22.195-9.114-31.121-16.303l.175.137c-9.307-7.525-16.667-17.092-21.446-28.038l-.185-.475c-4.958-11.304-7.411-26.289-7.411-44.921V586.375h-40.004v-49.348h40.004v-93.13h64.099v93.142h81.084v49.328h-81.084v133.158c0 5.485.455 10.972 1.368 16.415 1.039 6.078 2.757 11.516 5.104 16.603l-.17-.408c2.379 5.28 5.941 9.761 10.671 13.414 7.308 6.221 15.981 9.842 26.033 10.941 10.04 1.096 17.989 1.654 23.834 1.654h15.887v49.329zm72.847-383.589h64.098v383.589h-64.098zm299.688 210.45c6.212 0 10.144-1.852 11.801-5.485a27.897 27.897 0 0 0 2.455-11.521c0-9.109-1.917-16.976-5.755-23.548-3.841-6.581-8.136-11.707-12.874-15.361-8.044-6.211-16.904-9.945-26.572-11.22-9.687-1.272-19.096-1.925-28.216-1.925-4.389 0-9.139.082-14.253.267-5.563.224-11.099.906-16.55 2.039l.656-.113c-6.088 1.261-11.488 3.25-16.474 5.913l.326-.158c-5.631 2.996-10.429 6.745-14.484 11.188l-.037.038c-6.581 7.319-10.328 15.071-11.24 23.3-.87 7.441-1.555 16.641-1.893 25.931l-.019.647zm-89.839 173.148c-7.308 0-14.977-.266-23.019-.838-8.621-.595-16.65-2.247-24.246-4.834l.667.198c-8.559-2.954-15.98-6.762-22.743-11.45l.304.201c-7.309-4.927-13.881-11.581-19.728-20.008-9.502-13.879-15.349-30.129-17.534-48.761-2.102-16.99-3.302-36.656-3.302-56.603v-.392c0-13.506.281-26.207.839-38.069a177.192 177.192 0 0 1 4.616-34.079l-.239 1.198c2.359-10.029 5.837-19.272 10.391-27.667 4.585-8.424 10.889-16.083 18.91-23.04a87.734 87.734 0 0 1 25.988-15.683l.602-.204c9.668-3.655 19.447-6.315 29.291-7.959 9.886-1.645 19.385-2.639 28.505-3.013 9.11-.341 17.17-.539 24.096-.539 17.181 0 34.052 1.003 50.697 3.023 16.622 1.999 31.672 7.203 45.198 15.598 8.383 5.496 15.258 11.707 20.556 18.652a89.074 89.074 0 0 1 12.387 22.134l.21.613a111.142 111.142 0 0 1 6.293 25.761 220.93 220.93 0 0 1 1.644 27.129c0 7.31-.746 14.874-2.193 22.74-1.461 7.835-5.298 14.874-11.511 21.073-4.378 4.389-9.221 7.319-14.511 8.789-4.935 1.388-10.601 2.186-16.452 2.186h-169.014c0 6.221.362 13.341 1.087 21.362.724 8.043 1.655 14.241 2.765 18.632 2.175 7.669 5.28 13.787 9.304 18.35a39.86 39.86 0 0 0 13.989 10.323l.256.101c5.028 2.238 10.859 3.873 16.968 4.616l.299.029c5.343.703 11.525 1.105 17.799 1.107H4065.7v49.328zM522.759 305.015V471.24h-96.982v43.079h96.991v166.203h-48.812V563.763h-43.078v159.826h91.89v166.234h-48.812V773.051h-43.078v27.954c0 30.388-24.634 55.022-55.022 55.022l-82.439-.009V732.23c57.246-10.206 100.759-60.125 100.759-120.313 0-60.165-43.523-110.081-100.759-120.278v-69.863h180.542V305.015zm-452.958 0v116.761h180.541v69.863c-57.247 10.197-100.749 60.113-100.749 120.278 0 60.188 43.503 110.107 100.749 120.313v123.788l-82.439.009c-30.387 0-55.022-24.634-55.022-55.022v-27.954H69.803v116.772H20.991V723.589h91.89V563.763H69.803v116.759H20.991V514.319h96.992V471.24H20.991V305.015zm223.608 230.252c33.534 9.387 58.168 40.103 58.168 76.653 0 36.549-24.633 67.257-58.168 76.675l.56-.138a79.593 79.593 0 0 1-22.088 3.151h-.008c-7.665-.016-15.072-1.114-21.521-3.013-33.533-9.421-58.167-40.13-58.167-76.675 0-36.546 24.632-67.266 58.167-76.653l-.559.138a79.094 79.094 0 0 1 22.088-3.172h.009c7.666.016 15.075 1.122 21.519 3.032zm156.723-401.09v37.094H430.88l-.008.259c-.926 27.772-9.012 53.732-22.07 75.379l-.403.729c-9.82 16.389-22.496 30.873-37.652 43.013v60.528h-12.108v42.611H185.118v-42.611h-12.1v-60.528l-.317-.246c-14.725-11.794-27.316-26.142-37.503-43.092l.396.703c-13.609-22.444-21.784-48.547-22.71-76.745H93.631v-37.094h98.564v37.094H163.96l.01.243c2.227 47.035 34.622 86.174 79.025 98.674 9.202 2.558 18.87 4.004 28.887 4.004h.016c10.281-.026 20.22-1.488 28.874-4.004l.758-.182c43.644-12.318 76.042-51.457 78.275-98.735H351.58v-37.094z" fill="#222"/><path d="M295.77 574.825c-6.739-4.444-15.003-7.099-23.885-7.11h-.003a43.667 43.667 0 0 0-24.042 7.212l.164-.102c-12.281 7.958-20.295 21.591-20.306 37.095v.001c.012 15.507 8.025 29.141 20.134 36.992l.172.102c6.737 4.438 14.996 7.085 23.874 7.101h.007c8.818 0 16.996-2.66 23.889-7.101 12.282-7.953 20.301-21.587 20.305-37.094-.006-15.507-8.021-29.142-20.134-36.99l-.171-.103z" fill="#28aae1"/></g>},
    code: { width:'1em', height:'1em', viewbox: '1024 1024', path: <g><path d="M673.68 708.33l80.85 80.84 269.47-269.48-269.47-269.47-80.85 80.84 188.64 188.63-188.64 188.64z"/><path d="M350.32 331.060l-80.85-80.84-269.47 269.47 269.47 269.48 80.85-80.84-188.64-188.64 188.64-188.63z"/><path d="M622.12 231.24l-161.67 592.87-58.5-15.96 161.67-592.86 58.5 15.95z"/></g>},
    css: { width:'1em', height:'1em', viewbox: '1024 1024', path: <g><path d="M152.388 48.522l-34.36 171.926h699.748l-21.884 111.054h-700.188l-33.892 171.898h699.684l-39.018 196.064-282.012 93.422-244.4-93.422 16.728-85.042h-171.898l-40.896 206.352 404.226 154.704 466.006-154.704 153.768-772.252z"/></g>},
    html: { width:'1em', height:'1em', viewbox: '1024 1024', path: <g><path d="M 355.328 301.568 L 365.568 417.28 L 515.584 417.28 L 515.584 301.568 Z M 262.656 530.432 L 234.496 218.624 L 231.936 188.416 L 515.584 188.416 L 515.584 75.264 L 884.224 75.264 L 814.08 862.72 L 515.584 945.664 L 515.584 828.416 L 514.56 828.416 L 283.136 764.416 L 267.264 586.752 L 380.928 586.752 L 389.12 676.864 L 515.072 710.656 L 515.584 710.656 L 515.584 530.432 Z M 966.656 0 L 64 0 L 145.92 921.6 L 514.56 1024 L 884.224 921.6 Z"/><path opacity="0.8" d="M 515.072 530.432 L 515.072 417.28 L 515.584 417.28 L 515.584 530.432 Z M 777.728 417.28 L 774.656 447.488 L 748.544 744.96 L 746.496 764.416 L 515.584 828.274 L 515.584 945.664 L 814.08 862.72 L 884.224 75.264 L 515.584 75.264 L 515.584 188.416 L 798.208 188.416 L 795.136 218.624 L 790.016 275.968 L 787.968 301.568 L 515.584 301.568 L 515.584 417.28 Z M 515.072 828.416 L 515.072 710.656 L 515.584 710.519 L 515.584 828.274 Z M 641.024 676.864 L 654.336 530.432 L 515.584 530.432 L 515.584 710.519 Z M 515.072 188.416 L 515.584 188.416 L 515.584 301.568 L 515.072 301.568 Z"/><path opacity="0.2" d="M 355.328 301.568 L 365.568 417.28 L 515.584 417.28 L 515.584 530.432 L 262.656 530.432 L 234.496 218.624 L 231.936 188.416 L 515.584 188.416 L 515.584 301.568 Z M 380.928 586.752 L 389.12 676.864 L 515.072 710.656 L 515.584 710.656 L 515.584 828.416 L 514.56 828.416 L 283.136 764.416 L 267.264 586.752 Z"/></g>},
    javascript: { width:'1em', height:'1em', viewbox: '1024 1024', path: <g><path d="M 0 0 L 1024 0 L 1024 1024 L 0 1024 Z M 269.247 855.729 L 269.249 855.728 C 269.248 855.726 269.247 855.724 269.246 855.722 Z M 269.249 855.728 C 291.932 903.839 336.617 943.705 413.594 943.705 C 498.832 943.705 557.255 898.338 557.255 798.669 L 557.255 470.116 L 461.025 470.116 L 461.025 797.308 C 461.025 845.42 441.089 857.789 409.469 857.789 C 376.481 857.789 362.729 835.109 347.611 808.305 Z M 609.528 845.418 C 637.706 901.097 695.446 943.712 784.804 943.712 C 876.223 943.712 944.272 896.288 944.272 809.674 C 944.272 729.254 898.216 693.515 816.418 658.457 L 792.362 648.147 C 751.124 630.275 733.251 618.586 733.251 589.716 C 733.251 566.349 751.124 548.478 779.307 548.478 C 806.801 548.478 824.667 560.161 841.165 589.716 L 916.089 541.603 C 884.473 485.925 840.482 464.614 779.305 464.614 C 693.38 464.614 638.391 519.606 638.391 591.78 C 638.391 670.142 684.446 707.26 753.875 736.811 L 777.926 747.129 C 821.918 766.368 848.037 778.055 848.037 811.049 C 848.037 838.545 822.611 858.48 782.738 858.48 C 735.312 858.48 708.504 833.737 687.878 800.052 L 609.524 845.418 Z"/></g>},
    mobile: { width:'1em', height:'1em', viewbox: '1024 1024', path: <g><path d="M736 0h-448c-52.8 0-96 43.2-96 96v832c0 52.8 43.2 96 96 96h448c52.8 0 96-43.2 96-96v-832c0-52.8-43.2-96-96-96zM384 48h256v32h-256v-32zM512 960c-35.346 0-64-28.654-64-64s28.654-64 64-64 64 28.654 64 64-28.654 64-64 64zM768 768h-512v-640h512v640z"/></g>},
    react: { width:'1em', height:'1em', viewbox: '1024 1024', path: <g><path d="M603.264 512c0 50.404-40.86 91.264-91.264 91.264s-91.264-40.86-91.264-91.264c0-50.404 40.86-91.264 91.264-91.264s91.264 40.86 91.264 91.264z"/><path d="M256.341 693.547l-20.139-5.12c-150.101-37.931-236.203-102.315-236.203-176.597s86.101-138.667 236.203-176.597l20.139-5.077 5.675 19.968c17.427 59.534 37.207 110.167 60.77 158.621l-2.615-5.96 4.309 9.088-4.309 9.088c-21.008 42.541-40.79 93.177-56.362 145.624l-1.793 7.037-5.675 19.925zM226.859 381.867c-114.091 32.043-184.107 81.067-184.107 129.963 0 48.853 70.016 97.877 184.107 129.963 16.375-51.835 33.476-94.868 53.189-136.421l-2.757 6.459c-16.998-35.141-34.1-78.175-48.354-122.486l-2.078-7.477zM767.659 693.547l-5.675-20.011c-17.397-59.48-37.192-110.1-60.795-158.523l2.598 5.904-4.309-9.088 4.309-9.088c20.991-42.518 40.785-93.152 56.391-145.59l1.806-7.071 5.675-19.968 20.181 5.077c150.059 37.931 236.16 102.315 236.16 176.64s-86.101 138.667-236.16 176.597l-20.181 5.12zM746.709 511.829c20.48 44.331 37.419 87.893 50.432 129.963 114.133-32.085 184.107-81.109 184.107-129.963 0-48.896-70.016-97.877-184.107-129.963-16.34 51.795-33.441 94.829-53.171 136.372l2.739-6.41z"/><path d="M226.56 381.653l-5.675-19.925c-42.197-148.736-29.397-255.317 35.115-292.523 63.275-36.523 164.864 6.613 271.317 115.883l14.507 14.891-14.507 14.891c-36.676 38.083-70.629 79.417-101.171 123.302l-2.168 3.29-5.76 8.235-10.027 0.853c-59.99 4.821-115.073 14.042-168.464 27.517l6.97-1.49-20.139 5.077zM307.456 98.773c-11.435 0-21.547 2.475-30.080 7.381-42.411 24.448-49.92 109.44-20.693 224.128 38.731-9.119 85.784-16.673 133.752-21.066l4.19-0.31c28.61-40.451 57.346-75.851 88.205-109.26l-0.653 0.716c-66.56-64.811-129.579-101.589-174.72-101.589zM716.587 967.552c-0.043 0-0.043 0 0 0-60.8 0-138.88-45.781-219.904-128.981l-14.507-14.891 14.507-14.891c36.663-38.090 70.602-79.438 101.126-123.338l2.17-3.297 5.76-8.235 9.984-0.853c60.002-4.793 115.118-14 168.539-27.471l-6.961 1.487 20.139-5.077 5.717 19.968c42.112 148.651 29.355 255.275-35.157 292.437-14.374 8.272-31.607 13.151-49.98 13.151-0.504 0-1.007-0.004-1.509-0.011l0.076 0.001zM541.824 823.296c66.56 64.811 129.579 101.589 174.72 101.589h0.043c11.392 0 21.547-2.475 30.037-7.381 42.411-24.448 49.963-109.483 20.693-224.171-38.768 9.137-85.837 16.691-133.824 21.070l-4.16 0.306c-28.571 40.473-57.296 75.887-88.158 109.297l0.648-0.71z"/><path d="M797.44 381.653l-20.139-5.077c-46.487-12.029-101.603-21.252-158.039-25.797l-3.539-0.229-9.984-0.853-5.76-8.235c-32.67-47.183-66.61-88.519-103.593-126.902l0.297 0.31-14.507-14.891 14.507-14.891c106.411-109.227 207.957-152.363 271.317-115.883 64.512 37.205 77.312 143.787 35.157 292.48l-5.717 19.968zM629.333 308.907c48.725 4.437 95.019 11.648 137.984 21.376 29.269-114.688 21.717-199.68-20.693-224.128-42.155-24.363-121.387 12.971-204.8 94.208 30.188 32.69 58.911 68.089 85.298 105.262l2.212 3.282zM307.456 967.552c-0.439 0.007-0.956 0.011-1.475 0.011-18.373 0-35.607-4.88-50.476-13.414l0.495 0.262c-64.512-37.163-77.312-143.744-35.115-292.437l5.632-19.968 20.139 5.077c49.28 12.416 103.637 21.163 161.493 25.984l10.027 0.853 5.717 8.235c32.719 47.191 66.671 88.538 103.646 126.955l-0.307-0.321 14.507 14.891-14.507 14.891c-80.981 83.2-159.061 128.981-219.776 128.981zM256.683 693.333c-29.269 114.688-21.717 199.723 20.693 224.171 42.112 24.021 121.301-13.013 204.8-94.208-30.181-32.703-58.917-68.115-85.33-105.292l-2.222-3.294c-52.126-4.681-99.18-12.235-145.102-22.757l7.161 1.381z"/><path d="M512 720.128c-35.115 0-71.211-1.536-107.349-4.523l-10.027-0.853-5.76-8.235c-17.419-24.566-36.456-54.116-54.294-84.456l-3.306-6.082c-14.479-24.255-31.065-55.411-46.384-87.29l-3.365-7.771-4.267-9.088 4.267-9.088c18.676-39.64 35.262-70.796 53.052-101.162l-3.303 6.1c17.664-30.549 37.077-61.013 57.6-90.539l5.76-8.235 10.027-0.853c32.164-2.894 69.575-4.544 107.371-4.544s75.208 1.65 112.166 4.882l-4.795-0.338 9.984 0.853 5.717 8.235c37.651 53.308 73.422 114.148 104.065 177.917l3.327 7.683 4.309 9.088-4.309 9.088c-33.853 71.409-69.628 132.255-110.056 189.584l2.664-3.984-5.717 8.235-9.984 0.853c-36.139 2.987-72.277 4.523-107.392 4.523zM418.261 673.877c63.147 4.736 124.331 4.736 187.52 0 32.123-46.25 63.305-99.337 90.466-154.753l3.23-7.295c-30.297-62.657-61.496-115.748-96.387-166.086l2.648 4.038c-28.060-2.262-60.749-3.552-93.739-3.552s-65.677 1.29-98.016 3.821l4.277-0.269c-32.27 46.312-63.469 99.404-90.57 154.865l-3.169 7.183c30.431 62.72 61.625 115.806 96.447 166.192l-2.709-4.144z"/></g>},
    webpack: { width:'1em', height:'1em', viewbox: '1024 1024', path: <g><path d="M 496.309 765.872 L 277.316 645.289 L 277.316 406.682 L 496.309 533.064 Z M 527.691 533.064 L 746.684 406.682 L 746.684 645.46 L 527.691 765.872 Z M 291.983 379.052 L 512 258.128 L 731.846 379.052 L 512 505.945 Z M 60.028 256.252 L 60.028 767.748 L 512 1023.411 L 963.972 767.748 L 963.972 256.252 L 512 0.589 Z M 140.018 274.075 L 496.309 72.308 L 496.309 229.219 L 274.246 351.507 L 140.019 274.075 Z M 115.629 296.078 L 245.933 371.293 L 245.933 642.476 L 115.629 717.691 Z M 883.981 274.075 L 749.754 351.507 L 527.691 229.389 L 527.691 72.478 L 883.982 274.075 Z M 908.371 717.691 L 778.067 642.476 L 778.067 371.293 L 908.371 296.078 Z M 893.192 744.979 L 527.691 951.692 L 527.691 799.897 L 763.74 670.104 L 893.192 744.978 Z M 130.979 744.978 L 260.431 669.934 L 496.309 799.897 L 496.309 951.692 L 130.979 744.979 Z"/><path opacity="0.3" d="M 496.309 765.872 L 277.316 645.289 L 277.316 406.682 L 496.309 533.064 L 496.309 765.872 Z M 527.691 765.872 L 746.684 645.46 L 746.684 406.682 L 527.691 533.064 L 527.691 765.872 Z M 291.983 379.052 L 512 258.128 L 731.846 379.052 L 512 505.945 L 291.983 379.052 Z"/></g>}
  };

  const Glyph = icons[type];

  return (
    <svg
      className={className}
      type={type}
      width={Glyph.width}
      height={Glyph.height}
      viewBox={'0 0 ' + Glyph.viewbox}
      style={{ ...style, ...{ fontSize: size + 'px' } }}
    >
      {Glyph.path}
    </svg>
  );
};

export { Icon };