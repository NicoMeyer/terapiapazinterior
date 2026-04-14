type FloatingBookingButtonProps = {
  bookingUrl: string;
  isVisible: boolean;
};

export function FloatingBookingButton({
  bookingUrl,
  isVisible,
}: FloatingBookingButtonProps) {
  return (
    <a
      className={`floating-booking-button${isVisible ? ' is-visible' : ''}`}
      href={bookingUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Agendar orientación"
    >
      <svg
        className="floating-booking-button__icon"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          d="M7 3v3M17 3v3M4 9h16M6 5h12a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
      <span>Agendar</span>
    </a>
  );
}
