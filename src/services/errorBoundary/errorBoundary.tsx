import React, { Component, ErrorInfo, ReactNode } from 'react';
import { ErrorBoundaryStyle } from '@src/services/errorBoundary/errorBoundaryStyle';

interface ErrorBoundaryProps {
  children?: ReactNode;
}
interface ErrorBoundaryState {
  hasError: boolean;
  errorMessage: JSX.Element[] | null;
}
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = {
    hasError: false,
    errorMessage: null,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(_: Error, errorInfo: ErrorInfo) {
    const error = errorInfo.componentStack.split('\n').map((info, i) => <p key={i}>{info}</p>);

    this.setState({
      ...this.state,
      errorMessage: error,
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorBoundaryStyle>
          <summary>Something went wrong.</summary>

          {this.state.errorMessage}
        </ErrorBoundaryStyle>
      );
    }

    return this.props.children;
  }
}
