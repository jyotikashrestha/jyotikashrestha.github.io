import {
  AddBoxOutlined,
  IndeterminateCheckBoxOutlined,
} from "@mui/icons-material";
import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { Fragment, useState } from "react";

const FAQ = () => {
  const [showAnswer, setShowAnswer] = useState("02");
  const FAQContent = [
    {
      id: "01",
      question:
        "How does this work? How can we trade credits from solar systems?",
      answer: "Please contact the administrator",
    },
    {
      id: "02",
      question:
        "Are you a retail electricity provider or with my city’s community choice energy program (CCE)?",
      answer:
        "No, we are not a retail electricity provider or a CCE. This is a partnership between two private companies focused on solar energy. This program will not change your retail electricity provider. If you are a Clean Energy Consumer, it will provide discounts on the electricity bills that you currently receive from your utility.",
    },
    {
      id: "03",
      question: "How do I receive or donate solar through the platform?",
      answer: "Please contact the administrator",
    },
    {
      id: "04",
      question:
        "As a Clean Energy Producer, can I deduct the energy donations on my taxes?",
      answer: "Please contact the administrator",
    },
    {
      id: "05",
      question:
        "How do I know if I am income eligible to be a Clean Energy Consumer?",
      answer: "Please contact the administrator",
    },
  ];
  return (
    <>
      <Box sx={{ background: "#F5F6F8", paddingY: "5rem" }}>
        <Container>
          <Stack spacing={4}>
            <Typography
              variant="h4"
              align="left"
              sx={{ fontWeight: "700", marginBottom: "2rem" }}
              className="text-heading font-jost"
            >
              Frequently Asked Questions
            </Typography>
            {FAQContent.map((item, index) => (
              <Fragment key={index}>
                <Grid container direction="row">
                  <Grid item md={1} xs={1} align="left">
                    <Typography
                      variant="body1"
                      align="left"
                      className="text-subheading font-open-sans opacity-40"
                      sx={{ fontWeight: "700" }}
                    >
                      {item.id}
                    </Typography>
                  </Grid>
                  <Grid item md={10} xs={10}>
                    <Stack spacing={3}>
                      <Typography
                        variant="body1"
                        align="left"
                        className="text-heading font-open-sans"
                      >
                        {item.question}
                      </Typography>
                      {showAnswer === item.id ? (
                        <Typography
                          variant="subtitle2"
                          align="left"
                          className="text-subheading font-open-sans"
                        >
                          {item.answer}
                        </Typography>
                      ) : null}
                    </Stack>
                  </Grid>
                  <Grid item md={1} xs={1} align="right">
                    {showAnswer === item.id ? (
                      <IndeterminateCheckBoxOutlined
                        className="text-gray-500"
                        onClick={() => setShowAnswer("")}
                      />
                    ) : (
                      <AddBoxOutlined
                        className="text-gray-500"
                        onClick={() => setShowAnswer(item.id)}
                      />
                    )}
                  </Grid>
                </Grid>
                {FAQContent.length > index + 1 ? (
                  <Divider variant="inset" />
                ) : null}
              </Fragment>
            ))}
          </Stack>
        </Container>
      </Box>
    </>
  );
};
export default FAQ;
