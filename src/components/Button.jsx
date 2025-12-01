import React from "react";

class Button extends React.Component {
  shouldComponentUpdate(nextProps) {
    const { change: currentChange, locale: currentLocale } = this.props;
    const { change: nextChange, locale: nextLocale } = nextProps;

    if (currentChange === nextChange && nextLocale === currentLocale) {
      return false;
    } else {
      return true;
    }
  }

  render() {
    const { change, locale, show, enable } = this.props;

    if (!enable) return null;

    return (
      <>
        <button type="button" onClick={() => change(locale)}>
          {/* Click Here */}
          {locale === "bn-BD" ? "Change clock" : "ঘড়ি পরিবর্তন করো"}
        </button>

        {show && <p>Hello</p>}
      </>
    );
  }
}

export default Button;
