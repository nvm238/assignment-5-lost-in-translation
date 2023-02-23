import { useEffect } from "react";
import { orderClearHistory } from "../api/translation";
import { userById } from "../api/user";
import { STORAGE_KEY_USER } from "../const/storageKeys";
import { useUser } from "../context/UserContext";
import withAuth from "../hoc/withAuth";
import { storageSave } from "../utils/storage";

const ProfilePage = () => {
  const { user, setUser } = useUser();

  useEffect(() => {
    const findUser = async () => {
      const [error, latestUser] = await userById(user.id);
      if (error === null) {
        storageSave(STORAGE_KEY_USER, latestUser);
        setUser(latestUser);
      }
    };

    findUser();
  }, [setUser, user.id]);

  const handleClearHistoryClick = async () => {
    if (!window.confirm("Are you sure?")) {
      return;
    }

    const [clearError] = await orderClearHistory(user.id);

    if (clearError !== null) {
      return;
    }

    const upatedUser = {
      ...user,
      translations: [],
    };

    storageSave(STORAGE_KEY_USER, upatedUser);
    setUser(upatedUser);
  };

  return (
    <div class="main">
      <div class="header-bar">
        <h2>Profile Page</h2>
      </div>
      <div class="content">
        <h3>hello {user.username}</h3>
        <p>See your requested translations here:</p>
        <div class="requested-translations">
          {user.translations.slice(-10).map((translation, index) => {
            return <p key={index}>{translation}</p>;
          })}
        </div>
        <button class="clear-button" onClick={handleClearHistoryClick}>Clear History</button>
      </div>
    </div>
  );
};

export default withAuth(ProfilePage);
