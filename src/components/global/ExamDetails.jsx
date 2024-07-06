const ExamDetails = () => {
    const [selectedClass, setSelectedClass] = useState(null);   
      const filteredExams = selectedClass
        ? examSchedule.filter(exam => exam.className === selectedClass)
        : [];
return(
<>

{selectedClass && (
    <Box sx={{
      width: '100%',
      maxWidth: '800px',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      marginTop: 4,
    }}>
      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        Exam Schedule for {selectedClass}
      </Typography>
      {filteredExams.map((exam) => (
        <Box
          key={exam.id}
          sx={{
            border: '1px solid #ccc',
            borderRadius: '4px',
            padding: '16px',
            boxShadow: 1,
            backgroundColor: '#fff',
          }}
        >
          <Typography variant="h6" sx={{ marginBottom: 1 }}>
            {exam.paperName}
          </Typography>
          <Typography variant="body1" sx={{ color: '#666', marginBottom: 1 }}>
            Date: {exam.date}
          </Typography>
          <Typography variant="body1" sx={{ color: '#666', marginBottom: 1 }}>
            Start Time: {exam.startTime} | End Time: {exam.endTime}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => console.log(`Clicked on ${exam.paperName} details`)}
          >
            View Details
          </Button>
        </Box>
      ))}
    </Box>
  )}
</>
)
}
  export default ExamDetails;