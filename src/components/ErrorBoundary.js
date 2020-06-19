import React, { Component } from "react";

class ErrorBoundary extends Component {
  state = {
    error: null,
  };

  static getDerivedStateFromError(error) {
    // Update state so next render shows fallback UI
    return { error: error };
  }

  render() {
    if (this.state.error) {
      // You can render any custom fallback UI
      return <p>Something broke</p>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
