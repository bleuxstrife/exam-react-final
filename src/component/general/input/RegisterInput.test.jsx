/**
 * Test Scenario
 *
 * - RegisterInput component
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 *   - should call registerHandler function when login button is clicked
 */
import React from 'react';
import {
  describe, it, expect, afterEach, vi,
} from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RegisterInput from './RegisterInput';

describe('RegisterInput component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should handle name typing correctly', async () => {
    // Arrange
    render(<RegisterInput registerHandler={() => {}} />);
    const nameInput = await screen.getByPlaceholderText('Nama');
    // Action
    await userEvent.type(nameInput, 'Reno Rizky Olantino');

    // Assert
    expect(nameInput).toHaveValue('Reno Rizky Olantino');
  });

  it('should handle email typing correctly', async () => {
    // Arrange
    render(<RegisterInput registerHandler={() => {}} />);
    const emailInput = await screen.getByPlaceholderText('Email');
    // Action
    await userEvent.type(emailInput, 'renokun21@gmail.com');

    // Assert
    expect(emailInput).toHaveValue('renokun21@gmail.com');
  });

  it('should handle password typing correctly', async () => {
    // Arrange
    render(<RegisterInput registerHandler={() => {}} />);
    const passwordInput = await screen.getByPlaceholderText('Password');

    // Action
    await userEvent.type(passwordInput, '12341234');

    // Assert
    expect(passwordInput).toHaveValue('12341234');
  });

  it('should call registerHandler function when register button is clicked', async () => {
    // Arrange
    const mockRegister = vi.fn();
    render(<RegisterInput registerHandler={mockRegister} />);
    const nameInput = await screen.getByPlaceholderText('Nama');
    await userEvent.type(nameInput, 'Reno Rizky Olantino');
    const emailInput = await screen.getByPlaceholderText('Email');
    await userEvent.type(emailInput, 'renokun21@gmail.com');
    const passwordInput = await screen.getByPlaceholderText('Password');
    await userEvent.type(passwordInput, '12341234');
    const registerButton = await screen.getByRole('button', { name: 'Daftar' });

    // Action
    await userEvent.click(registerButton);

    // Assert
    expect(mockRegister).toBeCalledWith({
      name: 'Reno Rizky Olantino',
      email: 'renokun21@gmail.com',
      password: '12341234',
    });
  });
});
