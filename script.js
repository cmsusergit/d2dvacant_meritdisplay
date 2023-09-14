const fetchmerit = async (contact, dob1) => {
  const url1 = `https://mhazmbcbujixalspvqrz.supabase.co/rest/v1/VacantMeritTbl?contact=eq.${contact}&dob=eq.${dob1}&select=*`;
  try {
    console.log(url1);
    const response = await fetch(url1, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        apikey:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1oYXptYmNidWppeGFsc3B2cXJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzUyNDc4NDksImV4cCI6MTk5MDgyMzg0OX0.IsZaoHFa9ovwI_z0ZhhqucJlCHZ-dZRqzar7d4sdBAw',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1oYXptYmNidWppeGFsc3B2cXJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzUyNDc4NDksImV4cCI6MTk5MDgyMzg0OX0.IsZaoHFa9ovwI_z0ZhhqucJlCHZ-dZRqzar7d4sdBAw',
      },
    });
    const dt = await response.json();
    return { error: false, dt: dt };
  } catch (ee) {
    return { error: true, dt: ee };
  }
};
