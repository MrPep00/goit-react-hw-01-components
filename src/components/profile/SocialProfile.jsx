import PropTypes from 'prop-types';
import css from './Profile.module.css';

export const Profile = ({
  username = 'unknown',
  tag = 'unknown',
  location = 'unknown',
  avatar = 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
  stats = 'unknown',
}) => (
  <div className={css.profile}>
    <div className={css.description}>
      <img src={avatar} alt="User avatar" class={css.avatar} />
      <p className={css.name}>{username}</p>
      <p className={css.tag}>{tag}</p>
      <p className={css.location}>{location}</p>
    </div>
    <ul className={css.stats}>
      <li>
        <span className={css.label}>Followers</span>
        <span className={css.quantity}>
          {stats === 'unknown' ? '??' : stats.followers}
        </span>
      </li>
      <li>
        <span className={css.label}>Views</span>
        <span className={css.quantity}>
          {stats === 'unknown' ? '??' : stats.views}
        </span>
      </li>
      <li>
        <span className={css.label}>Likes</span>
        <span className={css.quantity}>
          {stats === 'unknown' ? '??' : stats.likes}
        </span>
      </li>
    </ul>
  </div>
);

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
};
