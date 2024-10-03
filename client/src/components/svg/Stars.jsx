import PropTypes from "prop-types";

function Stars({ className, height = 30, width = 30 }) {
  return (
    <div>
      <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.2768 16.5148C10.2815 16.405 10.4634 16.3613 10.5174 16.4571C10.7707 16.9068 11.2029 17.5682 11.6932 17.8689C12.1836 18.1696 12.969 18.2549 13.4847 18.2768C13.5945 18.2815 13.6381 18.4634 13.5423 18.5174C13.0926 18.7707 12.4313 19.2029 12.1306 19.6932C11.8299 20.1836 11.7446 20.969 11.7227 21.4847C11.718 21.5945 11.536 21.6381 11.4821 21.5423C11.2287 21.0926 10.7966 20.4313 10.3062 20.1306C9.81588 19.8299 9.03048 19.7446 8.51481 19.7227C8.40495 19.718 8.36133 19.536 8.45713 19.4821C8.90682 19.2287 9.56818 18.7966 9.86889 18.3062C10.1696 17.8159 10.2549 17.0305 10.2768 16.5148Z"
          fill="#1C274C"
        />
        <path
          opacity="0.5"
          d="M18.4919 15.5147C18.4834 15.4051 18.2916 15.3591 18.2343 15.453C18.062 15.7355 17.8135 16.0764 17.5374 16.2458C17.2612 16.4152 16.8446 16.482 16.5147 16.5075C16.4051 16.516 16.3591 16.7078 16.453 16.7651C16.7355 16.9374 17.0764 17.1858 17.2458 17.462C17.4152 17.7382 17.482 18.1548 17.5075 18.4847C17.516 18.5943 17.7078 18.6403 17.7651 18.5464C17.9374 18.2639 18.1858 17.923 18.462 17.7536C18.7382 17.5842 19.1548 17.5174 19.4847 17.4919C19.5943 17.4834 19.6403 17.2916 19.5464 17.2343C19.2639 17.062 18.923 16.8135 18.7536 16.5374C18.5842 16.2612 18.5174 15.8446 18.4919 15.5147Z"
          fill="#1C274C"
        />
        <path
          d="M14.7034 4.00181L14.4611 3.69574C13.5245 2.51266 13.0561 1.92112 12.5113 2.00845C11.9665 2.09577 11.7059 2.80412 11.1849 4.22083L11.0501 4.58735C10.902 4.98993 10.828 5.19122 10.686 5.33897C10.544 5.48671 10.3501 5.56417 9.96242 5.71911L9.60942 5.86016L9.36156 5.95933C8.16204 6.4406 7.55761 6.71331 7.48044 7.24324C7.39813 7.80849 7.97023 8.29205 9.11443 9.25915L9.41045 9.50935C9.7356 9.78417 9.89817 9.92158 9.99137 10.1089C10.0846 10.2962 10.0978 10.5121 10.1244 10.9441L10.1485 11.3373C10.2419 12.8574 10.2886 13.6174 10.7826 13.8794C11.2765 14.1414 11.8906 13.7319 13.1188 12.9129L13.1188 12.9129L13.4366 12.701C13.7856 12.4683 13.9601 12.3519 14.1597 12.32C14.3593 12.288 14.5613 12.344 14.9655 12.456L15.3334 12.558C16.7555 12.9522 17.4666 13.1493 17.8542 12.746C18.2418 12.3427 18.0493 11.6061 17.6641 10.1328L17.5645 9.75163C17.4551 9.33297 17.4003 9.12364 17.4305 8.91657C17.4606 8.70951 17.5723 8.52816 17.7955 8.16546L17.7955 8.16544L17.9987 7.83522C18.7843 6.55883 19.1771 5.92063 18.9227 5.40935C18.6682 4.89806 17.9351 4.85229 16.4689 4.76076L16.0896 4.73708C15.6729 4.71107 15.4646 4.69807 15.2836 4.60208C15.1027 4.5061 14.9696 4.338 14.7034 4.00181L14.7034 4.00181Z"
          fill="#1C274C"
        />
        <path
          opacity="0.5"
          d="M8.835 13.326C6.69772 14.3702 4.91931 16.024 4.24844 18.0002C3.49589 13.2926 4.53976 10.2526 6.21308 8.36328C6.35728 8.658 6.54466 8.902 6.71297 9.09269C7.06286 9.48911 7.56518 9.91347 8.07523 10.3444L8.44225 10.6545C8.51184 10.7134 8.56597 10.7592 8.61197 10.7989C8.61665 10.8632 8.62129 10.9383 8.62727 11.0357L8.65708 11.5212C8.69717 12.1761 8.7363 12.8155 8.835 13.326Z"
          fill="#1C274C"
        />
      </svg>
    </div>
  );
}

export default Stars;

Stars.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  className: PropTypes.string.isRequired,
};
