import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({ className, href, children, px, white }) => {
  const buttonclasses = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${
    px || "px-7"
  } ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;
  const spanClasses = "relative z-10";
  const renderButton = () => (
    <>
      <button className={buttonclasses}>
        <span>{children}</span> {ButtonSvg(white)}
      </button>
    </>
  );
  const renderLink = () => (
    <>
      <a href={href} className={buttonclasses}>
        <span className={spanClasses}>{children}</span> {ButtonSvg(white)}
      </a>
    </>
  );
  return href ? renderLink() : renderButton();
};

export default Button;
