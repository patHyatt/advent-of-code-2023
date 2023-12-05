use std::collections::HashMap;
use std::collections::HashSet;
use std::fs;
use std::path::Path;

pub fn main() {
    solve(String::from("../test.txt"));
    // solve(String::from("../input.txt"));
    //Attempts
    //2398 -> too low
}

fn solve<T>(file_path: T) -> u32
where
    T: AsRef<Path>,
{
    let contents = fs::read_to_string(file_path).expect("Something went wrong reading the file");
    let lines = contents.lines();

    let mut cards_per_game: HashMap<u32, u32> = HashMap::new();

    let mut game_number = 0;

    for line in lines {
        game_number += 1;
        // println!("{}", line);
        let mut winning_numbers: HashSet<u32> = HashSet::new();

        let (_game, cards) = line.split_once(": ").unwrap();
        // println!("Game:: {} ", game);

        // let game_number = game.

        let numbers = cards.split('|').collect::<Vec<&str>>();
        let winning = numbers[1].split(' ').collect::<Vec<&str>>();
        // println!("Winning:: {:?} ", winning);
        for number in winning {
            if number.is_empty() {
                continue;
            }
            // println!("Winning:: {} ", number);
            winning_numbers.insert(number.parse::<u32>().unwrap());
        }

        let mut matches = 0;
        let elfs = numbers[0].split(' ').collect::<Vec<&str>>();
        for number in elfs {
            if number.is_empty() {
                continue;
            }

            if winning_numbers.contains(&number.parse::<u32>().unwrap()) {
                matches += 1;
            }
        }
        // println!("Matches:: {} ", matches);

        if matches > 0 {
            let current = match cards_per_game.get(&(game_number)) {
                Some(x) => x,
                None => &0,
            };
            cards_per_game.insert(game_number, current + 1);
        }
        for i in 1..=matches {
            let current = match cards_per_game.get(&(i + game_number)) {
                Some(x) => x,
                None => &0,
            };
            println!("Increasing copies for '{}', current '{}'", i + game_number, current);

            cards_per_game.insert(i, current + 1);
        }
    }

    let total_cards: u32 = cards_per_game.values().sum();
    println!("Total cards {}", total_cards);
    return total_cards;
}
