import express from 'express';
import { getFeedPosts, getUserPosts, likePost, addComment, deletePost } from '../controllers/posts.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

/* READ */
router.get('/', verifyToken, getFeedPosts);
router.get('/:userId/posts', verifyToken, getUserPosts);

/* UPDATE */
router.patch('/:id/like', verifyToken, likePost);

/* ADD COMMENT */
router.post("/:postId/comment", verifyToken, addComment);

/* DELETE */
router.delete('/:id', verifyToken, deletePost); // Nouvelle route de suppression

export default router;
