import React, { useContext } from 'react';
import Button from '../UI/Button';
import Input from '../UI/Input';
import { useForm } from 'react-hook-form';
import { UsersContext } from '../../context/UsersContext';

function AddUserForm() {
  const { dispatch } = useContext(UsersContext);
  const {
    register,
    reset,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      userName: '',
      userLogin: '',
      preferences: '',
    },
  });

  const submitHandler = (data, e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_TO_DB', user: data });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <Input
        {...register('userName', {
          required: true,
        })}
        type="text"
        placeholder="First Name"
        className={` nes-input ${isValid && 'is-success'} `}
      />
      <Input
        {...register('userLogin', {
          required: true,
        })}
        type="text"
        placeholder="User Login"
        className={`nes-input ${isValid && 'is-success'} `}
      />
      <Input
        {...register('preferences', {
          required: false,
        })}
        type="text"
        placeholder="Food or/and drinks"
        className={` nes-input`}
      />

      <Button
        type="submit"
        className={`nes-btn ${!isValid ? 'is-disabled' : 'is-success'}
        `}
      >
        Join the meet
      </Button>
    </form>
  );
}

export default AddUserForm;
