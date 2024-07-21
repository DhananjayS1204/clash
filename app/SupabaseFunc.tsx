'use client'
import { supabase } from "@/lib/supabase"

export const postItem = async ({name, place, date, description, type, img, currUser}:any) => {
    try {
      const { data, error } = await supabase
        .from('lost')
        .insert({
        id: Math.random().toString(36).substring(7),
          name: name || '',
          place: place || '',
          date: date || '',
          description: description || '',
          image: img || '',
          created_by: currUser || '',
        });
      if (error) {
        console.error('Error inserting user data:', error.message, error.details, error.hint, error.code);
      } else {
        console.log('User data inserted:', data);
      }
    } catch (error) {
      console.error('Unexpected error:', error);
    }

}

 export const getItem = async ({setData}:any) => {
    try {
        const { data, error } = await supabase
          .from('lost')
            .select('*')

            if(data){
                setData(data)
            }
       
      } catch (error) {
        console.error('Unexpected error:', error);
      }
  
};



export const setUserDataa = async (setCurrUserData: React.Dispatch<React.SetStateAction<any>>) => {
  const { data: user, error: userError } = await supabase.auth.getUser();
  
  if (userError) {
    console.error('Error fetching user:', userError.message);
    return;
  }

  const { data, error } = await supabase.from('users').select('*').eq('id', user?.user?.id);

  if (error) {
    console.error('Error fetching user:', error.message);
    return;
  }

  if (data && data.length > 0) {
    setCurrUserData(data[0]);
  }
};

export const getTweets = async ({setTweets, setLoading}:any) => {
  const { data, error } = await supabase.from('tweets').select('*');
    if (error) {
      console.error('Error fetching tweets:', error);
    } else {
      setTweets(data);
      setLoading(false);
    }
}


export const getPosts = async ({setPosts, id}:any) => {
  const { data, error } = await supabase.from('tweets').select('*').eq('created_by', id);
    if (error) {
      console.error('Error fetching posts:', error);
    } else {
      setPosts(data);
    }

}


export const logOut = async () => {
  await supabase.auth.signOut()
}