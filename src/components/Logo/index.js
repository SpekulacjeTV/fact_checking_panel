import React from 'react';
import PropTypes from 'prop-types';

const Logo = ({ className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 225 50" className={className}>
      <title>#FakeHunter</title>
      <path
        fill="currentColor"
        d="M12.335 16.286H9.351l-.787 5.373H6.445l.788-5.373H4.226l-.787 5.373H.788v2.792h2.296l-.41 2.68H0v2.792h2.307l-.787 5.374h2.984l.787-5.374h2.141l-.798 5.374h2.984l.81-5.374h2.65v-2.791h-2.295l.377-2.681h2.684v-2.792H11.57l.765-5.373zM7.81 27.132H5.69l.356-2.681h2.14l-.376 2.68zM17.072 35.297h4.582v-7.385h7.421v-3.78h-7.421v-3.923h8.053v-3.923H17.072v19.01zM41.766 23.198c-.488-.583-1.12-1.011-1.908-1.286-.788-.275-1.753-.418-2.885-.418a9.658 9.658 0 00-3.239.56 7.621 7.621 0 00-2.773 1.693l2.252 2.385c.41-.374.92-.704 1.508-.967a4.438 4.438 0 011.83-.407c.689 0 1.265.154 1.731.473.466.318.71.802.71 1.461v.22c-.976 0-1.974.055-3.006.165-1.032.11-1.963.319-2.806.648-.843.319-1.531.78-2.064 1.374-.532.593-.799 1.373-.799 2.34 0 .792.156 1.451.466 1.99.311.538.7.967 1.176 1.285.477.319 1.01.56 1.587.703a7.02 7.02 0 001.675.22c.81 0 1.564-.154 2.263-.461.698-.308 1.22-.736 1.564-1.286h.077v1.418h4.072V28.57c0-1.22-.111-2.263-.344-3.153-.244-.901-.6-1.638-1.087-2.22zm-2.652 6.725c0 .846-.244 1.506-.72 2-.478.494-1.166.736-2.075.736-.222 0-.444-.022-.677-.066a1.818 1.818 0 01-.621-.23 1.37 1.37 0 01-.444-.429c-.122-.176-.177-.396-.177-.648 0-.396.122-.715.377-.956.255-.242.577-.429.965-.55a6.36 6.36 0 011.331-.253c.5-.044.987-.066 1.476-.066h.565v.462zM60.768 21.923h-5.391l-4.315 5.429h-.078V15h-4.482v20.297h4.482v-6.418h.078l4.415 6.418h5.502l-5.413-7.33 5.202-6.044zM73.614 23.428a5.97 5.97 0 00-2.141-1.439c-.832-.33-1.742-.495-2.74-.495-1.032 0-1.986.165-2.873.506a6.981 6.981 0 00-2.308 1.44c-.654.615-1.164 1.373-1.541 2.252-.378.88-.566 1.88-.566 2.967 0 1.132.188 2.132.588 3.011a6.39 6.39 0 001.597 2.22c.677.605 1.464 1.055 2.374 1.374.91.318 1.864.472 2.873.472 1.376 0 2.585-.241 3.617-.736A6.24 6.24 0 0075 32.89l-3.096-1.934a3.59 3.59 0 01-1.198 1.011c-.488.264-1.087.385-1.785.385-.4 0-.777-.066-1.154-.187a3.209 3.209 0 01-.999-.528c-.288-.23-.543-.483-.732-.79a2.487 2.487 0 01-.344-1.023h9.785c.022-.165.022-.33.022-.505v-.539c0-1.143-.167-2.165-.5-3.066-.332-.9-.787-1.66-1.386-2.285zm-7.92 3.649c.022-.34.11-.67.266-.978a2.73 2.73 0 01.654-.824c.266-.231.588-.418.943-.55a3.468 3.468 0 011.198-.198c.888 0 1.553.253 1.997.748.444.505.665 1.099.665 1.802h-5.724zM90.63 23.483h-7.476v-7.197h-4.637v19.01h4.637v-7.944h7.477v7.945h4.637V16.286H90.63v7.197zM107.714 29.143c0 .77-.2 1.44-.61 2.01-.41.572-.998.858-1.775.858-.421 0-.754-.077-.998-.23a1.745 1.745 0 01-.61-.627 2.59 2.59 0 01-.311-.912 6.797 6.797 0 01-.078-1.077v-7.253h-4.47v8.275c0 .681.089 1.351.255 2 .166.66.455 1.23.843 1.747.388.506.899.923 1.52 1.253.621.319 1.386.483 2.285.483.466 0 .921-.066 1.342-.187a5.5 5.5 0 001.165-.483c.355-.198.655-.429.921-.703.266-.264.477-.55.632-.857h.056v1.857h4.281V21.923h-4.448v7.22zM127.859 23.286c-.388-.506-.898-.923-1.531-1.253-.632-.319-1.397-.484-2.307-.484-.466 0-.91.066-1.331.187a5.4 5.4 0 00-1.154.484c-.355.198-.654.44-.921.714-.266.275-.477.56-.632.846h-.055v-1.857h-4.304v13.374h4.47v-7.253c0-.374.044-.736.144-1.088.1-.352.244-.66.444-.923.2-.264.444-.484.743-.626.3-.154.644-.231 1.043-.231.399 0 .732.077.987.23.267.154.466.363.61.616.145.264.244.56.311.901.067.34.1.703.1 1.077v7.308h4.47v-8.275c0-.66-.088-1.33-.255-1.99a4.685 4.685 0 00-.832-1.757zM137.144 18.407h-4.359v3.516h-2.141v3.275h2.174v5.648c0 .714.078 1.374.244 1.956.166.583.433 1.088.799 1.506.366.417.865.747 1.475.967.61.22 1.376.34 2.274.34.466 0 .943-.044 1.409-.12a6.92 6.92 0 001.165-.286l-.056-3.22c-.166.077-.366.12-.61.165a5.243 5.243 0 01-.688.055c-.632 0-1.065-.154-1.309-.473-.244-.319-.366-.791-.366-1.417v-5.121h3.173v-3.275h-3.173v-3.516h-.011zM153.895 23.428a5.969 5.969 0 00-2.141-1.439c-.832-.33-1.742-.495-2.74-.495-1.032 0-1.986.165-2.873.506a6.984 6.984 0 00-2.308 1.44c-.654.615-1.164 1.373-1.542 2.252-.377.88-.565 1.88-.565 2.967 0 1.132.188 2.132.588 3.011.388.88.92 1.616 1.597 2.22.677.605 1.464 1.055 2.374 1.374a8.61 8.61 0 002.873.472c1.376 0 2.585-.241 3.616-.736a6.236 6.236 0 002.507-2.11l-3.095-1.934c-.31.407-.698.747-1.198 1.011-.488.264-1.087.385-1.786.385-.399 0-.776-.066-1.153-.187a3.22 3.22 0 01-.999-.528c-.288-.23-.543-.483-.732-.79a2.504 2.504 0 01-.344-1.023h9.784c.023-.165.023-.33.023-.505v-.539c0-1.143-.167-2.165-.5-3.066-.332-.9-.787-1.66-1.386-2.285zm-7.921 3.649c.022-.34.111-.67.267-.978.155-.308.377-.582.654-.824.266-.231.588-.418.943-.55a3.466 3.466 0 011.198-.198c.887 0 1.553.253 1.997.748.444.505.665 1.099.665 1.802h-5.724zM166.552 21.55c-.832 0-1.564.22-2.196.648a4.312 4.312 0 00-1.465 1.681h-.055v-1.934h-4.282v13.352h4.448V28.44c0-.264.056-.583.167-.934.111-.352.288-.682.532-.99.244-.307.566-.56.976-.78.411-.209.91-.318 1.509-.318.177 0 .366.01.555.021.188.012.388.055.588.11l.188-3.89a1.813 1.813 0 00-.421-.077 4.652 4.652 0 00-.544-.033zM221.624 21.322a3.238 3.238 0 00-2.849 1.716h-2.401a17.247 17.247 0 00-1.701-5.874l1.838-1.077c.99.655 2.302.739 3.401.095 1.553-.91 2.084-2.926 1.187-4.502a3.22 3.22 0 00-4.435-1.205c-1.067.622-1.646 1.766-1.624 2.931l-1.964 1.15a17.094 17.094 0 00-3.56-3.548l1.034-1.815a3.23 3.23 0 002.991-1.643c.897-1.577.367-3.592-1.187-4.502a3.22 3.22 0 00-4.435 1.204 3.347 3.347 0 00.039 3.364l-1.034 1.816a16.521 16.521 0 00-5.337-1.566V6.234a3.3 3.3 0 001.782-2.937c0-1.82-1.454-3.297-3.248-3.297-1.794 0-3.248 1.477-3.248 3.297 0 1.25.683 2.332 1.69 2.893v1.593a16.535 16.535 0 00-6.262 1.66l-.848-1.488a3.347 3.347 0 00.039-3.364 3.22 3.22 0 00-4.436-1.205c-1.553.91-2.083 2.926-1.186 4.502a3.24 3.24 0 002.991 1.643l.848 1.494a17.041 17.041 0 00-3.664 3.702l-1.674-.982a3.293 3.293 0 00-1.624-2.931 3.22 3.22 0 00-4.435 1.204c-.897 1.577-.366 3.592 1.187 4.502a3.197 3.197 0 003.401-.1l1.575.928a17.21 17.21 0 00-1.58 5.45h-1.887c-.536-1.07-1.63-1.809-2.893-1.809-1.794 0-3.248 1.477-3.248 3.298 0 1.82 1.454 3.297 3.248 3.297a3.238 3.238 0 002.849-1.715h1.838c.109 1.92.536 3.752 1.219 5.451l-1.624.95a3.212 3.212 0 00-3.396-.1c-1.553.91-2.083 2.925-1.187 4.502a3.22 3.22 0 004.436 1.204c1.066-.622 1.646-1.765 1.624-2.931l1.547-.905a17.24 17.24 0 003.549 4.053l-.607 1.071a3.23 3.23 0 00-2.991 1.643c-.897 1.577-.366 3.592 1.187 4.502a3.22 3.22 0 004.435-1.204 3.347 3.347 0 00-.038-3.364l.525-.922a16.6 16.6 0 006.425 2.043v1.904a3.301 3.301 0 00-1.782 2.937c0 1.82 1.454 3.297 3.248 3.297 1.794 0 3.248-1.477 3.248-3.297 0-1.25-.683-2.332-1.69-2.893v-1.92a16.493 16.493 0 006.049-1.66l.481.844a3.344 3.344 0 00-.038 3.364 3.22 3.22 0 004.435 1.204c1.553-.91 2.083-2.925 1.187-4.502a3.242 3.242 0 00-2.992-1.643l-.487-.855a16.999 16.999 0 003.861-4.008l1.11.65a3.296 3.296 0 001.625 2.93 3.22 3.22 0 004.435-1.204c.897-1.576.366-3.592-1.187-4.502a3.2 3.2 0 00-3.396.094l-1.077-.632a17.132 17.132 0 001.482-5.868h2.307c.536 1.071 1.63 1.81 2.893 1.81 1.794 0 3.249-1.477 3.249-3.298.005-1.815-1.449-3.292-3.243-3.292z"
      ></path>
      <path
        fill="#ffffff"
        d="M211.533 24.66h-3.179c-.263-4.28-3.688-7.727-7.986-8.064v-3.263h-1.321v3.257c-4.319.31-7.772 3.769-8.035 8.065H188.2v1.31h2.834c.378 4.182 3.782 7.51 8.019 7.814v2.888h1.321v-2.888c4.209-.326 7.586-3.643 7.964-7.808h3.195v-1.31zm-4.505 0h-2.867c-.312-1.909-1.858-3.41-3.793-3.681v-3.067c3.569.326 6.402 3.192 6.66 6.748zm-7.981 0h-2.373a3.144 3.144 0 012.373-2.333v2.333zm0 1.31v2.459a3.157 3.157 0 01-2.4-2.458h2.4zm1.321 0h2.472a3.15 3.15 0 01-2.472 2.475V25.97zm0-1.31v-2.354a3.15 3.15 0 012.445 2.354h-2.445zm-1.321-6.754v3.084a4.48 4.48 0 00-3.721 3.67h-2.993c.263-3.578 3.124-6.444 6.714-6.754zm-6.692 8.065h2.954a4.459 4.459 0 003.738 3.79v2.708c-3.508-.294-6.319-3.04-6.692-6.498zm8.013 6.498v-2.692c1.979-.277 3.547-1.838 3.81-3.8h2.828c-.367 3.436-3.157 6.17-6.638 6.492z"
      ></path>
    </svg>
  );
};

Logo.propTypes = {
  className: PropTypes.string
};

export default Logo;
