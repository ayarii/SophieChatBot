import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import { PieChart, Pie, Sector, Tooltip} from 'recharts';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';


const data01 = [
    { name: 'Science Students', value: 400 },
    { name: 'Sports Students', value: 300 },
    { name: 'Maths Students', value: 300 },
    { name: 'Literature Students', value: 200 },
    
  ];
  
 

  const data = [
    {
      name: 'Science',
      uv: 4000,
      Coursescompleted: 2400,
      amt: 2400,
    },
    {
      name: 'Sports',
      uv: 3000,
      Coursescompleted: 1398,
      amt: 2210,
    },
    {
      name: 'Maths',
      uv: 2000,
      Coursescompleted: 9800,
      amt: 2290,
    },
    {
      name: 'Literature',
      uv: 2780,
      Coursescompleted: 3908,
      amt: 2000,
    },
    
   
  ];
 
class UserClassification extends Component{


    render(){
    return ( 
        <div>
            <section class="inner-page-banner" id="home">
</section>
<div class="breadcrumb-agile">
	<ol class="breadcrumb mb-0">
		<li class="breadcrumb-item">
		<Link to='/'>Home</Link>
		</li>
		<li class="breadcrumb-item active" aria-current="page">Users Classification  </li>
	</ol>
</div>

<table>
    <tr><th>
<h2 class="heading text-center">User classification      </h2> </th>


<th><h2>Courses Completed chart</h2></th></tr>

<tr>
<th><PieChart  width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data01}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
         
          <Tooltip />
        </PieChart></th>
        
     

      

        

        
        
        
        <th><BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="Coursescompleted" fill="#8884d8" background={{ fill: '#eee' }} />
        </BarChart></th></tr>
        
        
        
        </table>


       
        </div>



       
        
        )
    }
}

    export default UserClassification 
