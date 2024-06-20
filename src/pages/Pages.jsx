import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";
import { getBooks } from "../utils";
import PropTypes from "prop-types";
const Pages = () => {
  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "green"];

  const savedBooks = getBooks();

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
  Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  return (
    <div className=" md:min-h-[70vh] mx-auto flex justify-center items-center py-10">
      <BarChart
        width={1000}
        height={500}
        data={savedBooks}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="2 2" />
        <XAxis dataKey="book_name" />
        <YAxis />
        <Bar
          dataKey="book_pages"
          fill="#8884d8"
          shape={<TriangleBar />}
          label={{ position: "top" }}
        >
          {savedBooks.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
};

export default Pages;
Pages.propTypes = {
  fill: PropTypes.object.isRequired,
  x: PropTypes.object.isRequired,
  y: PropTypes.object.isRequired,
  height: PropTypes.object.isRequired,
  width: PropTypes.object.isRequired,
};
