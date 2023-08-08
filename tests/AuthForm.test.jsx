import React from 'react';
import { render, screen } from '@testing-library/react';
import AuthForm from '../src/containers/Forms/AuthForm';

describe('AuthForm', () => {
  test('renders form', () => {
    render(<AuthForm />);
    const formElement = screen.getByRole('form');
    expect(formElement).toBeInTheDocument();
  });
});