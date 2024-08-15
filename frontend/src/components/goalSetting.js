import {
    Box,
    Flex,
    Heading,
    Text,
    VStack,
    Card,
    CardBody,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    Input,
    Button,
    HStack,
    Divider
  } from "@chakra-ui/react";
  import { motion } from "framer-motion";
  import { useState } from "react";
  
  const MotionBox = motion(Box);
  
  const GoalSetting = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [time, setTime] = useState('');
  
    const handleAddTask = () => {
      if (newTask.trim() && time) {
        setTasks([...tasks, { task: newTask, time, done: false }]);
        setNewTask('');
        setTime('');
      }
    };
  
    const handleToggleDone = (index) => {
      const updatedTasks = tasks.map((task, i) =>
        i === index ? { ...task, done: !task.done } : task
      );
      setTasks(updatedTasks);
    };
  
    const handleDeleteTask = (index) => {
      const updatedTasks = tasks.filter((_, i) => i !== index);
      setTasks(updatedTasks);
    };
  
    return (
      <Flex
        direction="column"
        minHeight="100vh"
        bg="black"
        alignItems="center"
        justifyContent="center"
        p={4}
        overflow="auto"
      >
        <Flex
          width="100%"
          maxWidth="1200px"
          direction="column"
          boxShadow="xl"
          borderRadius="lg"
          overflow="auto"
          bg="white"
          p={6}
        >
          <Heading
            as="h1"
            size="2xl"
            textAlign="center"
            color="gray.800"
            mb={6}
            fontFamily="serif"
            as={motion.div}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition="0.5s ease-in-out"
          >
            Goal Setting Strategies
          </Heading>
  
          <VStack spacing={6} align="stretch">
            {/* SMART Goals Section */}
            <Card boxShadow="md" borderRadius="lg" bg="white">
              <CardBody>
                <Heading as="h2" size="lg" color="gray.700" mb={4}>
                  SMART Goals
                </Heading>
                <Text color="gray.600" mb={4}>
                  The SMART criteria are a set of guidelines that help in setting clear and achievable goals. Here’s a breakdown:
                </Text>
                <Table variant="simple">
                  <TableCaption>SMART Criteria</TableCaption>
                  <Thead>
                    <Tr>
                      <Th>Criteria</Th>
                      <Th>Description</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>Specific</Td>
                      <Td>Clearly define what you want to achieve.</Td>
                    </Tr>
                    <Tr>
                      <Td>Measurable</Td>
                      <Td>Set criteria to measure your progress.</Td>
                    </Tr>
                    <Tr>
                      <Td>Achievable</Td>
                      <Td>Ensure that your goal is attainable.</Td>
                    </Tr>
                    <Tr>
                      <Td>Relevant</Td>
                      <Td>Make sure it aligns with your overall objectives.</Td>
                    </Tr>
                    <Tr>
                      <Td>Time-bound</Td>
                      <Td>Set a deadline for achieving your goal.</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </CardBody>
            </Card>
  
            {/* Visualization Techniques Section */}
            <Card boxShadow="md" borderRadius="lg" bg="white">
              <CardBody>
                <Heading as="h2" size="lg" color="gray.700" mb={4}>
                  Visualization Techniques
                </Heading>
                <Text color="gray.600" mb={4}>
                  Visualization techniques can help enhance performance by mentally rehearsing and picturing success. Here’s how to use visualization effectively:
                </Text>
                <VStack spacing={4} align="stretch">
                  <Text color="gray.600">
                    <strong>1. Create a Clear Image:</strong> Picture yourself achieving your goal in as much detail as possible.
                  </Text>
                  <Text color="gray.600">
                    <strong>2. Practice Regularly:</strong> Spend a few minutes each day visualizing your success to keep motivation high.
                  </Text>
                  <Text color="gray.600">
                    <strong>3. Use All Senses:</strong> Engage all your senses in the visualization process to make it more vivid and impactful.
                  </Text>
                </VStack>
              </CardBody>
            </Card>
  
            {/* Tracking Progress Section */}
            <Card boxShadow="md" borderRadius="lg" bg="white">
              <CardBody>
                <Heading as="h2" size="lg" color="gray.700" mb={4}>
                  Tracking Progress
                </Heading>
                <Text color="gray.600" mb={4}>
                  Tracking your progress is essential to ensure you are on the right path to achieving your goals. Here’s a method to track progress effectively:
                </Text>
                <Table variant="simple">
                  <TableCaption>Progress Tracking Metrics</TableCaption>
                  <Thead>
                    <Tr>
                      <Th>Metric</Th>
                      <Th>Description</Th>
                      <Th>Example</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>Performance</Td>
                      <Td>Measure how well you are performing related to your goal.</Td>
                      <Td>Completion rates, skill levels</Td>
                    </Tr>
                    <Tr>
                      <Td>Consistency</Td>
                      <Td>Track how regularly you are working towards your goal.</Td>
                      <Td>Number of practice sessions per week</Td>
                    </Tr>
                    <Tr>
                      <Td>Feedback</Td>
                      <Td>Collect feedback to adjust your strategies.</Td>
                      <Td>Coach’s comments, self-reflection</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </CardBody>
            </Card>
  
            {/* Overcoming Setbacks Section */}
            <Card boxShadow="md" borderRadius="lg" bg="white">
              <CardBody>
                <Heading as="h2" size="lg" color="gray.700" mb={4}>
                  Overcoming Setbacks
                </Heading>
                <Text color="gray.600" mb={4}>
                  Facing setbacks is a natural part of achieving goals. Here are strategies to overcome challenges and stay motivated:
                </Text>
                <VStack spacing={4} align="stretch">
                  <Text color="gray.600">
                    <strong>1. Stay Positive:</strong> Maintain a positive mindset to overcome challenges.
                  </Text>
                  <Text color="gray.600">
                    <strong>2. Analyze the Setback:</strong> Identify what went wrong and how to address it.
                  </Text>
                  <Text color="gray.600">
                    <strong>3. Adjust Your Plan:</strong> Modify your approach as needed to better align with your goal.
                  </Text>
                  <Text color="gray.600">
                    <strong>4. Seek Support:</strong> Reach out to mentors, coaches, or peers for guidance and encouragement.
                  </Text>
                </VStack>
              </CardBody>
            </Card>
  
            {/* Create Your Own Goal Section */}
            <Card boxShadow="md" borderRadius="lg" bg="white">
              <CardBody>
                <Heading as="h2" size="lg" color="gray.700" mb={4}>
                  Create Your Own Goal
                </Heading>
                <VStack spacing={5} align="stretch">
                  <HStack spacing={3}>
                    <Input
                      placeholder="Task"
                      value={newTask}
                      onChange={(e) => setNewTask(e.target.value)}
                    />
                    <Input
                      placeholder="Time"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                    />
                  </HStack>
                  <Button onClick={handleAddTask} colorScheme="blackAlpha" bg="black" width="100%">
                    Add Task
                  </Button>
  
                  {tasks.length > 0 && (
                    <Box mt={5} p={3} bg="gray.100" borderRadius="md" boxShadow="md">
                      <Text fontSize="lg" fontWeight="bold" textAlign="center">
                        Task List
                      </Text>
                      <Divider my={3} />
                      {tasks.map((task, index) => (
                        <Box key={index} p={3} borderBottom="1px solid #eee">
                          <HStack justifyContent="space-between">
                            <Text fontSize="md">{`Task: ${task.task}`}</Text>
                            <Text fontSize="md">{`Time: ${task.time}`}</Text>
                            <Button
                              colorScheme={task.done ? "green" : "red"}
                              size="sm"
                              onClick={() => handleToggleDone(index)}
                            >
                              {task.done ? "Done" : "Not Done"}
                            </Button>
                          </HStack>
                          {task.done && (
                            <Button
                              colorScheme="blackAlpha"
                              bg="black"
                              size="sm"
                              mt={2}
                              onClick={() => handleDeleteTask(index)}
                            >
                              Delete Task
                            </Button>
                          )}
                        </Box>
                      ))}
                    </Box>
                  )}
                </VStack>
              </CardBody>
            </Card>
          </VStack>
        </Flex>
      </Flex>
    );
  };
  
  export default GoalSetting;