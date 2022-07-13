with 
line as (
  SELECT 
    Tabb.author, 
    birthday, 
    book 
  FROM Tabb

  LEFT JOIN Taba 
  ON Taba.author = Tabb.author

  UNION

  SELECT 
    Taba.author, 
    birthday, 
    book 
  FROM Taba

  LEFT JOIN Tabb 
  ON Taba.author = Tabb.author

  ORDER BY author
),
  line2 as (
  SELECT 
    line.author
  FROM line
  GROUP BY line.author
  HAVING  Count(*) > 1
)

SELECT 
  line.author, 
  line.birthday, 
  line.book
FROM line
right join line2
ON line2.author = line.author
