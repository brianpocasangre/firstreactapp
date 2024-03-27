interface Props {
  text: string;
}

const Alert = ({ text }: Props) => {
  return <div className='alert alert-primary'>Alert</div>;
};

export default Alert;
