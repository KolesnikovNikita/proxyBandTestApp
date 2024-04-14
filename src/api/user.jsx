import { usersData, usersAlbum, usersPost } from './axios';

const fetchAllData = async () => {
    try {
        const [users, albums, posts] = await Promise.all([usersData.get('/'), usersAlbum.get('/'), usersPost.get('/')]);
        return [{ personData: users.data }, { albumData: albums.data }, { postData: posts.data }];
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export default fetchAllData;
