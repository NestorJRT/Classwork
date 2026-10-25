import express from 'express';
import { protect, requireAdmin } from '../middlewares/authMiddleware.js';
import { AppError } from '../utils/appError.js';

const router = express.Router();

// Simulated In-Memory Database
let initiatives = [
    { id: 1, title: 'Solar Canopy Expansion', priority: 'High', status: 'Active' },
    { id: 2, title: 'Campus Composting Loop', priority: 'Medium', status: 'In Review' }
];

// TODO: Use router.route('/') with METHOD CHAINING
// Chain .get() -> protected, returns all initiatives
// Chain .post() -> protected, validates body title & priority, creates & returns new initiative (201)
router.route('/')
    .get(protect, (req, res) => {
        res.json({status: 'success', data: {initiatives}});
    })
    .post(protect, (req, res, next) => {
        const {title, priority} = req.body;

        if (!title || !priority) {
            return next(new AppError('Please provide a title and priority.', 400));
        }

        const initiative = {
            id: Math.max(0, ...initiatives.map(item => item.id)) +1,
            title,
            priority,
            status: 'Active'
        };
        initiatives.push(initiative);
        res.status(201).json({status: 'success', data: {initiative}});
    });

// TODO: Use router.route('/:id') with METHOD CHAINING
// Chain .get() -> protected, returns single initiative or 404
// Chain .delete() -> protected + requireAdmin, deletes initiative by ID or 404
router.route('/:id')
    .get(protect, (req, res, next) => {
        const initiative = initiatives.find(item => item.id === Number(req.params.id));
        if (!initiative) {
            return next(newAppError('Inititiative not found.', 404));
        }
        res.json({ status: 'success', data: {initiative}});
    })
    .delete(protect, requireAdmin, (req, res, next) => {
        const index = initiatives.findIndex(item => item.id === Number(req.params.id));
        if (index === -1) {
            return next(new AppError('Initiative not found.', 404));
        }
        const [initiative] = initiatives.splice(index, 1);
        res.json({status: 'success', data: {initiative}});
    });

export default router;