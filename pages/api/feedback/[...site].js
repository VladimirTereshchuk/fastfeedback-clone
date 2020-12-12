import { getAllFeedback } from "@/lib/db-admin";
// import { logger, formatObjectKeys } from "@/utils/logger";

export default async (req, res) => {
  const siteId = req.query.siteId;
  const { feedback, error } = await getAllFeedback(siteId);

  if (error) {
    res.status(500).json({ error });
  }
  res.status(200).json({ feedback });

  // try {
  //   const [siteId, route] = req.query.site;
  //   const { feedback } = await getAllFeedback(siteId, route);

  //   res.status(200).json({ feedback });
  // } catch (error) {
  //   logger.error(
  //     {
  //       request: {
  //         headers: formatObjectKeys(req.headers),
  //         url: req.url,
  //         method: req.method,
  //       },
  //       response: {
  //         statusCode: res.statusCode,
  //       },
  //     },
  //     error.message
  //   );

  //   res.status(500).json({ error });
  // }
};
