/**
 * Test Scenario
 *
 * - LoginInput component
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 *   - should call loginHandler function when login button is clicked
 */
import React from 'react';
import {
  describe, it, expect, afterEach, vi,
} from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginInput from './LoginInput';

describe('LoginInput component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should handle email typing correctly', async () => {
    // Arrange
    render(<LoginInput loginHandler={() => {}} />);
    const emailInput = await screen.getByPlaceholderText('Email');
    // Action
    await userEvent.type(emailInput, 'renokun21@gmail.com');

    // Assert
    expect(emailInput).toHaveValue('renokun21@gmail.com');
  });

  it('should handle password typing correctly', async () => {
    // Arrange
    render(<LoginInput loginHandler={() => {}} />);
    const passwordInput = await screen.getByPlaceholderText('Password');

    // Action
    await userEvent.type(passwordInput, '12341234');

    // Assert
    expect(passwordInput).toHaveValue('12341234');
  });

  it('should call loginHandler function when login button is clicked', async () => {
    // Arrange
    const mockLogin = vi.fn();
    render(<LoginInput loginHandler={mockLogin} />);
    const emailInput = await screen.getByPlaceholderText('Email');
    await userEvent.type(emailInput, 'renokun21@gmail.com');
    const passwordInput = await screen.getByPlaceholderText('Password');
    await userEvent.type(passwordInput, '12341234');
    const loginButton = await screen.getByRole('button', { name: 'Masuk' });

    // Action
    await userEvent.click(loginButton);

    // Assert
    expect(mockLogin).toBeCalledWith({
      email: 'renokun21@gmail.com',
      password: '12341234',
    });
  });
});
