import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, Button, TextInput } from 'react-native';
import CustomBottomSheet from '../components/bottomSheet/BottomSheet';
import FireIcon from '../assets/icons/FireIcon';
import UserIcon from '../assets/icons/UserIcon';
import SearchIcon from '../assets/icons/SearchIcon';
import LikeDislike from '../components/likeDislike/LikeDislike';
import Arrow from '../assets/icons/Arrow';
// import PrimaryButton from '../components/button/PrimaryButton';
import SeeMore from '../components/button/SeeMore';
import SeemoreArrow from '../assets/icons/SeemoreArrow';
import { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import MenuIcon from '../assets/icons/MenuIcon';
// import SeemoreArrow from '../assets/icons/SeemoreArrow';

const HomeScreen = () => {
 // Optional: handle like and dislike actions
 const handleLike = (change) => {
  console.log(`Like count changed by: ${change}`);
};

const handleDislike = (change) => {
  console.log(`Dislike count changed by: ${change}`);
};

  const  {width, height} = Dimensions.get("window");

  return (
    <>
    <View>
    <View> 
      <Image
      source={{uri: "https://media.wired.com/photos/5a6a61938c669c70314b300d/master/pass/Google-Map-US_10.jpg"}}
      resizeMode='cover'
      style={{
        width: width,
        height: height,
        position:'absolute'
      }} 
      />
      <View>
      <View style={{
        flexDirection: 'row',
        position: 'absolute',
        
      }}>
        <View style={{
          top: 5,
          left: 15,
          // backgroundColor: 'purple'
        }}>
          <UserIcon height={50} width={40}/>
        </View>
          <View style={{
            left: 60,
            backgroundColor: 'white',
            width: 200,
            top: 5,
            borderRadius: 30,
            height: 40
          }}><View style={{
            alignItems: 'start',
            justifyContent: 'center',
            top: 5,
            left: 15,
            
          }}><SearchIcon /></View>
          <View style={{
            position: 'absolute',
            borderRightWidth: 2, // Width of the right border
            borderRightColor: 'gray',
            width: 1,
            height: 35,
            left: 50,
            top: 3,
          }}></View>
          <View style={{
            position:'absolute',
            top: 0,
            width: 100,
            height: 50,
            // backgroundColor: 'orange',
            left: 65,
            paddingBottom: 7,
          }}>
          <TextInput
        style={{
          fontSize: 18,
          top: 0
        }}
        placeholder="Around you"
        onChangeText={() => ''}
      />
          </View>
          <View style={{
            position: 'absolute',
            // right: 5,
            left: 260,
            top: 5
          }}>
            <MenuIcon />
          </View>
          </View>
          
        </View>
      </View>
    </View>
    </View>
    <View style={{
          width: 150,
          height: 40,
          borderColor: 'blue',
          justifyContent: 'center',
          left: '32%',
          flexDirection: 'row',
          bottom: 3,
          zIndex: 1,
          top: "85%",
        }}>
          <SeeMore title={'See More '}/>
        </View>
    <View style={{
          width: 450,
          height: 110,
          backgroundColor: 'white',
          top: "86%",
          zIndex: 1,
          flexDirection: 'row',
          borderColor: 'lightgray',
          borderTopWidth: 1
        }}>
          {/* <BottomMenu> */}
          
        </View>
      <CustomBottomSheet>
        <BottomSheetScrollView>
        <View>
          <Text style={{
            fontSize: 30,
            // fontWeight: 'bold',
            fontFamily: 'Inter',
            color: 'black',
            top: 5
          }}>Around you</Text>
          <Text style={{
            fontSize: 16,
            fontWeight: 'bold',
            fontFamily: 'Inter',
            color: 'gray',
            top: 2
          }}>1 new incidents | 10 past incidents.</Text>
          <Text style={{
            fontSize: 20,
            fontFamily: 'Inter',
            color: 'black',
            top: 10
          }}>Incidents</Text>
          <View style={{
            // backgroundColor: 'white',
            width: 600,
            height: 110,
            top: 25,
            borderTopWidth: 2,
            // borderBottomWidth: 2, 
            borderColor: '#CECECE'
          }}>
            <View style={{
              flexDirection:"row"
            }}>
              <View style={{
                paddingHorizontal: 15,
                paddingVertical: 40,
              }}>
                <FireIcon />
              </View>
              <View style={{
                // backgroundColor: "red",
                paddingHorizontal: 50,
                paddingVertical: 40,
                }}>
                  <Text style={{
                    alignContent: 'flex-start',
                    fontFamily: 'Ubuntu',
                    fontWeight: 'bold',
                    position: 'absolute',
                    fontSize: 20,
                    top: 5,
                    left: 0,
                    color: 'black'
                  }}>fire catch in a car.
                </Text>
                <Text style={{
                    alignContent: 'flex-start',
                    fontFamily: 'Inter',
                    position: 'absolute',
                    color: '#545252',
                    fontSize: 15,
                    top: 30,
                    left: 0,
                    }}>
                  main road sant nagar...
                </Text>
                <View style={{
                  // backgroundColor: 'pink',
                  height: 30,
                  width: 230,
                  position: 'absolute',
                  top: 65,
                  borderRadius: 40,
                  left: 3

                }}>
                  <View style={{
                  height: 25,
                  width: 100,
                  position: 'absolute',
                  borderRadius: 30,
                  left: 2}}
                  >
                    <LikeDislike 
                    initialLikes={0} 
                    initialDislikes={0} 
                    onLike={handleLike} 
                    onDislike={handleDislike} 
                    />
                  </View>
                </View>
              </View>
              <View style={{
                // backgroundColor: "green",
                paddingHorizontal: 10,
                paddingVertical: 10,
                height: 40,
                left: 145,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'start',
                top: 7
                }}>
                  <Text style={{
                    fontSize: 18,
                    color: 'blue',
                    bottom: 2
                  }}>
                    300m
                  </Text>
                <View style={{
                  bottom: 3,
                  left: 7
                }}>
                  <Arrow />
                </View>
                </View>
            </View>
          </View>
          <View style={{
            // backgroundColor: 'white',
            width: 600,
            height: 110,
            top: 25,
            borderTopWidth: 2,
            // borderBottomWidth: 2, 
            borderColor: '#CECECE'
          }}>
            <View style={{
              flexDirection:"row"
            }}>
              <View style={{
                paddingHorizontal: 15,
                paddingVertical: 40,
              }}>
                <FireIcon />
              </View>
              <View style={{
                // backgroundColor: "red",
                paddingHorizontal: 50,
                paddingVertical: 40,
                }}>
                  <Text style={{
                    alignContent: 'flex-start',
                    fontFamily: 'Ubuntu',
                    fontWeight: 'bold',
                    position: 'absolute',
                    fontSize: 20,
                    top: 5,
                    left: 0,
                    color: 'black'
                  }}>fire catch in a car.
                </Text>
                <Text style={{
                    alignContent: 'flex-start',
                    fontFamily: 'Inter',
                    position: 'absolute',
                    color: '#545252',
                    fontSize: 15,
                    top: 30,
                    left: 0,
                    }}>
                  main road sant nagar...
                </Text>
                <View style={{
                  // backgroundColor: 'pink',
                  height: 30,
                  width: 230,
                  position: 'absolute',
                  top: 65,
                  borderRadius: 40,
                  left: 3

                }}>
                  <View style={{
                  height: 25,
                  width: 100,
                  position: 'absolute',
                  borderRadius: 30,
                  left: 2}}
                  >
                    <LikeDislike 
                    initialLikes={0} 
                    initialDislikes={0} 
                    onLike={handleLike} 
                    onDislike={handleDislike} 
                    />
                  </View>
                </View>
              </View>
              <View style={{
                // backgroundColor: "green",
                paddingHorizontal: 10,
                paddingVertical: 10,
                height: 40,
                left: 145,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'start',
                top: 7
                }}>
                  <Text style={{
                    fontSize: 18,
                    color: 'blue',
                    bottom: 2
                  }}>
                    300m
                  </Text>
                <View style={{
                  bottom: 3,
                  left: 7
                }}>
                  <Arrow />
                </View>
                </View>
            </View>
          </View>
          <View style={{
            // backgroundColor: 'white',
            width: 600,
            height: 110,
            top: 25,
            borderTopWidth: 2,
            // borderBottomWidth: 2, 
            borderColor: '#CECECE'
          }}>
            <View style={{
              flexDirection:"row"
            }}>
              <View style={{
                paddingHorizontal: 15,
                paddingVertical: 40,
              }}>
                <FireIcon />
              </View>
              <View style={{
                // backgroundColor: "red",
                paddingHorizontal: 50,
                paddingVertical: 40,
                }}>
                  <Text style={{
                    alignContent: 'flex-start',
                    fontFamily: 'Ubuntu',
                    fontWeight: 'bold',
                    position: 'absolute',
                    fontSize: 20,
                    top: 5,
                    left: 0,
                    color: 'black'
                  }}>fire catch in a car.
                </Text>
                <Text style={{
                    alignContent: 'flex-start',
                    fontFamily: 'Inter',
                    position: 'absolute',
                    color: '#545252',
                    fontSize: 15,
                    top: 30,
                    left: 0,
                    }}>
                  main road sant nagar...
                </Text>
                <View style={{
                  // backgroundColor: 'pink',
                  height: 30,
                  width: 230,
                  position: 'absolute',
                  top: 65,
                  borderRadius: 40,
                  left: 3

                }}>
                  <View style={{
                  height: 25,
                  width: 100,
                  position: 'absolute',
                  borderRadius: 30,
                  left: 2}}
                  >
                    <LikeDislike 
                    initialLikes={0} 
                    initialDislikes={0} 
                    onLike={handleLike} 
                    onDislike={handleDislike} 
                    />
                  </View>
                </View>
              </View>
              <View style={{
                // backgroundColor: "green",
                paddingHorizontal: 10,
                paddingVertical: 10,
                height: 40,
                left: 145,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'start',
                top: 7
                }}>
                  <Text style={{
                    fontSize: 18,
                    color: 'blue',
                    bottom: 2
                  }}>
                    300m
                  </Text>
                <View style={{
                  bottom: 3,
                  left: 7
                }}>
                  <Arrow />
                </View>
                </View>
            </View>
          </View>
          <View style={{
            // backgroundColor: 'white',
            width: 600,
            height: 110,
            top: 25,
            borderTopWidth: 2,
            // borderBottomWidth: 2, 
            borderColor: '#CECECE'
          }}>
            <View style={{
              flexDirection:"row"
            }}>
              <View style={{
                paddingHorizontal: 15,
                paddingVertical: 40,
              }}>
                <FireIcon />
              </View>
              <View style={{
                // backgroundColor: "red",
                paddingHorizontal: 50,
                paddingVertical: 40,
                }}>
                  <Text style={{
                    alignContent: 'flex-start',
                    fontFamily: 'Ubuntu',
                    fontWeight: 'bold',
                    position: 'absolute',
                    fontSize: 20,
                    top: 5,
                    left: 0,
                    color: 'black'
                  }}>fire catch in a car.
                </Text>
                <Text style={{
                    alignContent: 'flex-start',
                    fontFamily: 'Inter',
                    position: 'absolute',
                    color: '#545252',
                    fontSize: 15,
                    top: 30,
                    left: 0,
                    }}>
                  main road sant nagar...
                </Text>
                <View style={{
                  // backgroundColor: 'pink',
                  height: 30,
                  width: 230,
                  position: 'absolute',
                  top: 65,
                  borderRadius: 40,
                  left: 3

                }}>
                  <View style={{
                  height: 25,
                  width: 100,
                  position: 'absolute',
                  borderRadius: 30,
                  left: 2}}
                  >
                    <LikeDislike 
                    initialLikes={0} 
                    initialDislikes={0} 
                    onLike={handleLike} 
                    onDislike={handleDislike} 
                    />
                  </View>
                </View>
              </View>
              <View style={{
                // backgroundColor: "green",
                paddingHorizontal: 10,
                paddingVertical: 10,
                height: 40,
                left: 145,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'start',
                top: 7
                }}>
                  <Text style={{
                    fontSize: 18,
                    color: 'blue',
                    bottom: 2
                  }}>
                    300m
                  </Text>
                <View style={{
                  bottom: 3,
                  left: 7
                }}>
                  <Arrow />
                </View>
                </View>
            </View>
          </View>
          <View style={{
            // backgroundColor: 'white',
            width: 600,
            height: 110,
            top: 25,
            borderTopWidth: 2,
            // borderBottomWidth: 2, 
            borderColor: '#CECECE'
          }}>
            <View style={{
              flexDirection:"row"
            }}>
              <View style={{
                paddingHorizontal: 15,
                paddingVertical: 40,
              }}>
                <FireIcon />
              </View>
              <View style={{
                // backgroundColor: "red",
                paddingHorizontal: 50,
                paddingVertical: 40,
                }}>
                  <Text style={{
                    alignContent: 'flex-start',
                    fontFamily: 'Ubuntu',
                    fontWeight: 'bold',
                    position: 'absolute',
                    fontSize: 20,
                    top: 5,
                    left: 0,
                    color: 'black'
                  }}>fire catch in a car.
                </Text>
                <Text style={{
                    alignContent: 'flex-start',
                    fontFamily: 'Inter',
                    position: 'absolute',
                    color: '#545252',
                    fontSize: 15,
                    top: 30,
                    left: 0,
                    }}>
                  main road sant nagar...
                </Text>
                <View style={{
                  // backgroundColor: 'pink',
                  height: 30,
                  width: 230,
                  position: 'absolute',
                  top: 65,
                  borderRadius: 40,
                  left: 3

                }}>
                  <View style={{
                  height: 25,
                  width: 100,
                  position: 'absolute',
                  borderRadius: 30,
                  left: 2}}
                  >
                    <LikeDislike 
                    initialLikes={0} 
                    initialDislikes={0} 
                    onLike={handleLike} 
                    onDislike={handleDislike} 
                    />
                  </View>
                </View>
              </View>
              <View style={{
                // backgroundColor: "green",
                paddingHorizontal: 10,
                paddingVertical: 10,
                height: 40,
                left: 145,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'start',
                top: 7
                }}>
                  <Text style={{
                    fontSize: 18,
                    color: 'blue',
                    bottom: 2
                  }}>
                    300m
                  </Text>
                <View style={{
                  bottom: 3,
                  left: 7
                }}>
                  <Arrow />
                </View>
                </View>
            </View>
          </View>
          <View style={{
            // backgroundColor: 'white',
            width: 600,
            height: 110,
            top: 25,
            borderTopWidth: 2,
            // borderBottomWidth: 2, 
            borderColor: '#CECECE'
          }}>
            <View style={{
              flexDirection:"row"
            }}>
              <View style={{
                paddingHorizontal: 15,
                paddingVertical: 40,
              }}>
                <FireIcon />
              </View>
              <View style={{
                // backgroundColor: "red",
                paddingHorizontal: 50,
                paddingVertical: 40,
                }}>
                  <Text style={{
                    alignContent: 'flex-start',
                    fontFamily: 'Ubuntu',
                    fontWeight: 'bold',
                    position: 'absolute',
                    fontSize: 20,
                    top: 5,
                    left: 0,
                    color: 'black'
                  }}>fire catch in a car.
                </Text>
                <Text style={{
                    alignContent: 'flex-start',
                    fontFamily: 'Inter',
                    position: 'absolute',
                    color: '#545252',
                    fontSize: 15,
                    top: 30,
                    left: 0,
                    }}>
                  main road sant nagar...
                </Text>
                <View style={{
                  // backgroundColor: 'pink',
                  height: 30,
                  width: 230,
                  position: 'absolute',
                  top: 65,
                  borderRadius: 40,
                  left: 3

                }}>
                  <View style={{
                  height: 25,
                  width: 100,
                  position: 'absolute',
                  borderRadius: 30,
                  left: 2}}
                  >
                    <LikeDislike 
                    initialLikes={0} 
                    initialDislikes={0} 
                    onLike={handleLike} 
                    onDislike={handleDislike} 
                    />
                  </View>
                </View>
              </View>
              <View style={{
                // backgroundColor: "green",
                paddingHorizontal: 10,
                paddingVertical: 10,
                height: 40,
                left: 145,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'start',
                top: 7
                }}>
                  <Text style={{
                    fontSize: 18,
                    color: 'blue',
                    bottom: 2
                  }}>
                    300m
                  </Text>
                <View style={{
                  bottom: 3,
                  left: 7
                }}>
                  <Arrow />
                </View>
                </View>
            </View>
          </View>
          <View style={{
            // backgroundColor: 'white',
            width: 600,
            height: 170,
            top: 25,
            borderTopWidth: 2,
            // borderBottomWidth: 2, 
            borderColor: '#CECECE'
          }}>
            <View style={{
              flexDirection:"row"
            }}>
              <View style={{
                paddingHorizontal: 15,
                paddingVertical: 40,
              }}>
                <FireIcon />
              </View>
              <View style={{
                // backgroundColor: "red",
                paddingHorizontal: 50,
                paddingVertical: 40,
                }}>
                  <Text style={{
                    alignContent: 'flex-start',
                    fontFamily: 'Ubuntu',
                    fontWeight: 'bold',
                    position: 'absolute',
                    fontSize: 20,
                    top: 5,
                    left: 0,
                    color: 'black'
                  }}>fire catch in a car.
                </Text>
                <Text style={{
                    alignContent: 'flex-start',
                    fontFamily: 'Inter',
                    position: 'absolute',
                    color: '#545252',
                    fontSize: 15,
                    top: 30,
                    left: 0,
                    }}>
                  main road sant nagar...
                </Text>
                <View style={{
                  // backgroundColor: 'pink',
                  height: 30,
                  width: 230,
                  position: 'absolute',
                  top: 65,
                  borderRadius: 40,
                  left: 3

                }}>
                  <View style={{
                  height: 25,
                  width: 100,
                  position: 'absolute',
                  borderRadius: 30,
                  left: 2}}
                  >
                    <LikeDislike 
                    initialLikes={0} 
                    initialDislikes={0} 
                    onLike={handleLike} 
                    onDislike={handleDislike} 
                    />
                  </View>
                </View>
              </View>
              <View style={{
                // backgroundColor: "green",
                paddingHorizontal: 10,
                paddingVertical: 10,
                height: 40,
                left: 145,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'start',
                top: 7
                }}>
                  <Text style={{
                    fontSize: 18,
                    color: 'blue',
                    bottom: 2
                  }}>
                    300m
                  </Text>
                <View style={{
                  bottom: 3,
                  left: 7
                }}>
                  <Arrow />
                </View>
                </View>
               
                
            </View>
          </View>
        </View>
        {/* <View style={{
          width: 150,
          height: 40,
          borderColor: 'blue',
          justifyContent: 'center',
          left: '32%',
          flexDirection: 'row',
          bottom: 3
        }}>
          <SeeMore title={'See More '}/>
        </View> */}
        <View style={{
          width: 400,
          height: 80,
          backgroundColor: 'red',
          top: 10
        }}>
          {/* BottomMenu */}
        </View>
        </BottomSheetScrollView>
      </CustomBottomSheet>
      </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
    padding: 20,
  },
});
