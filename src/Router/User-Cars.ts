import Express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const Prisma = new PrismaClient();
const router = Express.Router();

// router.get("/test", (req: Request, res: Response): void => {
//   res.status(200).json({ msg: "hi" });
// });

router.post(
  "/create-user",
  async (req: Request, res: Response): Promise<void> => {
    try {
      const { username, password } = req.body;
      const savedata = await Prisma.user.create({
        data: {
          username: username,
          password: password,
        },
        select: {
          username: true,
          password: true,
        },
      });
      res.status(200).json({ msg: "ok", data: savedata });
    } catch (err) {
      console.log("error post router", err);
    }
  }
);

router.post(
  "/create-list-user",
  async (req: Request, res: Response): Promise<void> => {
    try {
      const { userlist } = req.body;

      const listuser = await Prisma.user.createMany({
        data: userlist,
      });
      res.status(200).json({ msg: "ok", data: listuser });
    } catch (err) {
      console.log("error post router", err);
    }
  }
);

router.post(
  "/create-user",
  async (req: Request, res: Response): Promise<void> => {
    try {
      const { username, password } = req.body;
      const savedata = await Prisma.user.create({
        data: {
          username: username,
          password: password,
        },
        select: {
          username: true,
          password: true,
        },
      });
      res.status(200).json({ msg: "ok", data: savedata });
    } catch (err) {
      console.log("error post router", err);
    }
  }
);

router.get("/get-all", async (req: Request, res: Response): Promise<void> => {
  try {
    const getdata = await Prisma.user.findMany();
    res.status(200).json({ msg: "ok", data: getdata });
  } catch (err) {
    console.log("error post router", err);
  }
});

router.get(
  "/get-user/:id",
  async (req: Request, res: Response): Promise<void> => {
    try {
      const id = req.params.id;
      console.log(id);
      const finduser = Prisma.user.findUnique({
        where: {
          id: id,
        },
      });
      res.status(200).json({ msg: "ok", data: finduser });
    } catch (err) {
      console.log("error post router", err);
    }
  }
);

router.put(
  "/update-user",
  async (req: Request, res: Response): Promise<void> => {
    try {
      const { id, username } = req.body;

      const result = await Prisma.user.update({
        where: {
          id: id,
        },
        data: {
          username: username,
        },
      });

      res.status(200).json({ msg: "ok", data: result });
    } catch (err) {
      console.log("error post router", err);
    }
  }
);

router.delete(
  "/del-user",
  async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.body;

      const result = await Prisma.user.delete({
        where: {
          id: id,
        },
      });
      if (result) {
        res.status(200).json({ msg: "successful delete user" });
      } else {
        res.status(500).json({ msg: "error delete user" });
      }
    } catch (err) {
      console.log("error post router", err);
    }
  }
);

// cars router

router.post(
  "/create-list-cars",
  async (req: Request, res: Response): Promise<void> => {
    try {
      const { carslist } = req.body;
      Prisma.cars
        .createMany({
          data: carslist,
        })
        .then((result) => [res.status(200).json({ msg: "ok", data: result })])
        .catch((err) => {
          res.status(200).json({ msg: "error request try agin" });
          // res.status(200).json({ msg: "error request try agin",errors:err }) // dev postion
        });
    } catch (err) {
      console.log("error post router", err);
    }
  }
);

router.get(
  "/get-cars-user",
  async (req: Request, res: Response): Promise<void> => {
    try {
      const getdata = await Prisma.user.findMany({
        where: { Cars: { some: {} } },
      });
      res.status(200).json({ msg: "ok", data: getdata });
    } catch (err) {
      console.log("error post router", err);
    }
  }
);

export default router;
