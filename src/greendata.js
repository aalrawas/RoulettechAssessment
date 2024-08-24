import {
    Button,
    Flex,
    Heading,
    Stack,
    Text,
    Card,
    CardBody,
    Box,
    StackDivider
  } from "@chakra-ui/react";

function CalculatorDashboard(){
    const data =[
      {companyName: "SME",
      totalEmissions: 30,
      status: "In-progress",
      lastUpdated: "Oct 24 2018",},
      {companyName: "SME",
      totalEmissions: 30,
      status: "Completed",
      lastUpdated: "Oct 24 2018",},
      {companyName: "SME",
      totalEmissions: 30,
      status: "In-progress",
      lastUpdated: "Oct 24 2018",}
    ]
  
  return(
      <Flex
          height="100vh"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          mt={-20}
        >
        <Card w={800}>
        <CardBody>
            <Stack divider={<StackDivider />} spacing="6">
            <Box>
            <Heading textAlign="center" mb={10}>
            Great to see you again!
            </Heading>
            <Text noOfLines={2} fontSize="lg" textAlign="center">
            This is your home base for creating new scope 3 emission calculations, viewing previous emissions, and analyzing your progress in reducing your Carbon print
            </Text>
            </Box>
        {data.map((e) => {
          return(
          <Box mb={-6}>
            <Heading size="md">
            {e.companyName} (C02 Emission: {e.totalEmissions})
            </Heading>
            <Text>
            Status: {e.status}
            </Text>
            <Text>
            Last Updated: {e.lastUpdated}
            </Text>
            <Button variant="link" colorScheme="green" mt={2}>
            Copy
            </Button>
            {e.status === "In-progress" ? (
            <Button ml={630} colorScheme="green" borderColor="black" w="125px" mt={-115}>
            Continue
            </Button>) : (
            <Button ml={630} colorScheme="green" borderColor="black" w="125px" mt={-115}>
            View Report
            </Button>)}
            </Box>
        )})}
            </Stack>
          </CardBody>
        </Card>
        </Flex>
  )
  }
  
  export default CalculatorDashboard;