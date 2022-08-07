fn main() {}

fn sum_in_array(array: &[i32], k: &i32 ) -> bool {
    if array.len() < 2 { return false; }
    let mut pivot = 0;
    while pivot < array.len() {
        for i in (pivot + 1)..array.len() {
            if array[pivot] + array[i] == *k { 
                return true; 
            }
        }
        pivot += 1;
    }
    false
} 

#[cfg(test)]
#[test]
fn default_true() {
    let array = [50, 10, 15, 3, 7];
    let k = 17;
    assert_eq!(sum_in_array(&array, &k), true);
}

#[test]
fn default_false() {
    let array = [50, 10, 15, 3, 7];
    let k = 20;
    assert_eq!(sum_in_array(&array, &k), false);
}

#[test]
fn empty_array() {
    let array = [];
    let k = 17;
    assert_eq!(sum_in_array(&array, &k), false);
}