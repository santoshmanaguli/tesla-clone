import styles from './Button.module.css';

export const Button = (props) => {
  return(
    <div>
      <button type='submit'>
        {props.btnName}
      </button>
    </div>
  )
}