import ReservationController from "../controllers/reservation.controller";
import { Router } from "express";
import appDataSource from "../infra/datasource";
import { Reservation } from "../infra/entities/reservation.entities";
import multer from "multer";
import ReservationServices from "../services/reservation.service";

const reservationRouter = Router()

const service = new ReservationServices(appDataSource.getRepository(Reservation))
const controller = new ReservationController(service)

const upload = multer({
    storage: multer.memoryStorage(),
})

reservationRouter.post('/create', upload.single('file'), async (req, res) => {
    await controller.createReservationController(req, res)
})

reservationRouter.get('/fetch', async (req, res) => {
    await controller.fetchReservationsController(req, res)
})

export default reservationRouter