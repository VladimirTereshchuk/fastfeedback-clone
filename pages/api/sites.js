import { auth } from "@/lib/firebase-admin";
import { getUserSites } from "@/lib/db-admin";
// import { logger, formatObjectKeys } from "@/utils/logger";

// import { getAllSites } from "@/lib/db-admin";

export default async (req, res) => {
  try {
    const { uid } = await auth.verifyIdToken(req.headers.token);
    const { sites } = await getUserSites(uid);

    res.status(200).json({ sites });
  } catch (error) {
    // logger.error(
    //   {
    //     request: {
    //       headers: formatObjectKeys(req.headers),
    //       url: req.url,
    //       method: req.method,
    //     },
    //     response: {
    //       statusCode: res.statusCode,
    //     },
    //   },
    //   error.message
    // );

    res.status(500).json({ error });
  }
};

// export default async (req, res) => {
//   // console.log("fuck", await getAllSites());
//   const { sites, error } = await getAllSites();
//   // const sites = await getAllSites();
//   // console.log("sites", sites);

//   if (error) {
//     res.status(500).json({ error });
//   }

//   res.status(200).json({ sites });
// };
