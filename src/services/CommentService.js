import ApiService from "./ApiService";
const ENDPOINTS = {
  MOVIE: "/movie/",
  COMMENTS: "/comments/",
  REPLIES: "/replies/",
};
class CommentService extends ApiService {
  getMovieComments = async (id, page) => {
    const data = await this.client.get(
      `${ENDPOINTS.MOVIE}${id}${ENDPOINTS.COMMENTS}`,
      { params: { page } }
    );
    return data.data;
  };

  getCommentReplies = async (id, parent_id, page) => {
    const data = await this.client.get(
      `${ENDPOINTS.MOVIE}${id}${ENDPOINTS.COMMENTS}${parent_id}${ENDPOINTS.REPLIES}`,
      { params: { page } }
    );
    return data.data;
  };
  createComment = async (id, content) => {
    const data = await this.client.post(
      `${ENDPOINTS.MOVIE}${id}${ENDPOINTS.COMMENTS}`,
      { ...content }
    );
    return data.data;
  };
}
export default new CommentService();
