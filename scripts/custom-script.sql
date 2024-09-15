-- Insert data into the 'Team' table
INSERT INTO appdb.Team (team_name, short_name, team_logo, team_city, home_ground, owner, coach, captain, titles)
VALUES
  ('Red Warriors', 'RW', 'red-warriors-logo.png', 'New York', 'Warriors Stadium', 'John Doe', 'Mike Smith', 'Alice Johnson', 5),
  ('Blue Titans', 'BT', 'blue-titans-logo.png', 'Los Angeles', 'Titans Arena', 'Jane Doe', 'Sarah Wilson', 'Bob Brown', 3);

-- Insert data into the 'Player' table
INSERT INTO appdb.Player (player_name, age, position, nationality, team_id)
VALUES
  ('Michael Jordan', 35, 'Guard', 'American', 1),
  ('LeBron James', 38, 'Forward', 'American', 1),
  ('Kobe Bryant', 41, 'Guard', 'American', 2),
  ('Shaquille O\'Neal', 40, 'Center', 'American', 2);
