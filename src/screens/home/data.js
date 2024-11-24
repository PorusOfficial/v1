const Data = [
    {
      id: 1,
      title: 'Fire catches in a car',
      location: 'Main road, Sant Nagar',
      distance: '500mt',
      upvotes: '10k',
      downvotes: '200k',
      comments: '10k',
      shares: '20k',
      time: '10m',
      type : 'red',
    },
    {
      id: 3,
      title: 'Traffic Jam',
      location: 'Ring Road, Delhi',
      distance: '2.3km',
      upvotes: '8k',
      downvotes: '100',
      comments: '3k',
      shares: '5k',
      time: '20m',
      type : 'green'
    },
    {
      id: 4,
      title: 'Waterlogging on roads',
      location: 'MG Road, Gurgaon',
      distance: '400mt',
      upvotes: '12k',
      downvotes: '1k',
      comments: '7k',
      shares: '10k',
      time: '25m',
      type : 'orange'
    },
    {
      id: 2,
      title: 'Building collapse',
      location: 'Sector 21, Noida',
      distance: '1.2km',
      upvotes: '15k',
      downvotes: '500',
      comments: '5k',
      shares: '8k',
      time: '15m',
      type : 'red'
    },
  ];

  const DummyComment = [
    {
      username: "RahulVerma",
      time: "1h",
      comment:
        "The bottom sheet implementation looks great. Can you share how the triggering works with dynamic data?",
      profileUrl: "pic4", // Reference to the mapped image key
    },
    {
      username: "PriyaSharma",
      time: "2h",
      comment:
        "This approach seems robust. Have you tested how it behaves with multiple bottom sheets?",
      profileUrl: "pic1", // Reference to the mapped image key
    },
    {
      username: "AmitKumar",
      time: "30m",
      comment:
        "I had a similar use case, and triggering the present() method from the parent worked well for me.",
      profileUrl: "pic3", // Reference to the mapped image key
    },
    {
      username: "NehaSingh",
      time: "45m",
      comment:
        "Great work! How does this handle scenarios where sheetRef is null or undefined?",
      profileUrl: "pic1", // Reference to the mapped image key
    },
    {
      username: "VikramRao",
      time: "3h",
      comment:
        "Interesting. Can you add an example of how the present() method is called in a real scenario?",
      profileUrl: "pic4", // Reference to the mapped image key
    },
    {
      username: "AnjaliMehta",
      time: "4h",
      comment:
        "Good implementation. However, you might need to consider edge cases for better stability.",
      profileUrl: "pic2", // Reference to the mapped image key
    },
    {
      username: "RajeshGupta",
      time: "10m",
      comment:
        "Looks great! Is there any way to optimize the event handling for better performance?",
      profileUrl: "pic1", // Reference to the mapped image key
    },
    {
      username: "SonalPatel",
      time: "1h",
      comment:
        "I think this solution is very helpful. Can you explain how it integrates with other components?",
      profileUrl: "pic4", // Reference to the mapped image key
    },
    {
      username: "ManojThakur",
      time: "5h",
      comment:
        "Good work. Does this approach work seamlessly with nested components as well?",
      profileUrl: "pic1", // Reference to the mapped image key
    },
    {
      username: "KavitaNair",
      time: "15m",
      comment:
        "Nice idea! You could also add some error handling for invalid inputs to the present() method.",
      profileUrl: "pic2", // Reference to the mapped image key
    },
  ];
  
  module.exports = {
    Data,
    DummyComment,
  };