let student: { name_siswa: string; umur_siswa: number; isAbsent?: boolean } = {
    name_siswa: "Riki Candra",
    umur_siswa: 17
};
// isAbsent?: boolean, (?) optional, boleh di isi atau tidak di isi
student.isAbsent = true;

console.log(student);
console.log({ student });
