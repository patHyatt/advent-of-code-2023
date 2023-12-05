use std::collections::HashSet;
use std::fs;
use std::path::Path;

pub fn main() {
    solve(String::from("test.txt"));
    solve(String::from("input.txt"));
}

fn solve<T>(file_path: T) -> u32
where
    T: AsRef<Path>,
{
    let contents = fs::read_to_string(file_path).expect("Something went wrong reading the file");
    let lines = contents.lines();

    let mut sum = 0;

    for line in lines {
        // println!("{}", line);
        let mut winning_numbers: HashSet<u32> = HashSet::new();

        let (_game, cards) = line.split_once(": ").unwrap();
        // println!("Game:: {} ", game);

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

        if matches == 0 {
            continue;
        }

        sum += u32::pow(2, matches - 1);
        // println!("Score:: {} ", score);
    }

    println!("Sum:: {} ", sum);
    return sum;
}
