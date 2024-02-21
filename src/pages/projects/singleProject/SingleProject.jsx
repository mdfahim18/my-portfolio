import { useLocation } from 'react-router-dom';
import '../style.scss';

const SingleProject = () => {
  const location = useLocation();
  console.log(location);
  return (
    <section className='single-project'>
      <img src={location.state.img} alt={location.state.category} />
      <p>{location.state.desc}</p>
      <footer>
        <p>Technology used: {location.state.technology}</p>
        <p>
          Link:{' '}
          <a target='_blank' href={location.state.link}>
            {location.state.link}
          </a>
        </p>
      </footer>
    </section>
  );
};

export default SingleProject;
