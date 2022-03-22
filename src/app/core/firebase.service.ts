import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Capability } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public db: AngularFirestore) { }

  getAvatars() {
    return this.db.collection('/avatar').valueChanges()
  }

  getUser(userKey) {
    return this.db.collection('users').doc(userKey).snapshotChanges();
  }

  updateUser(userKey, value) {
    value.nameToSearch = value.name.toLowerCase();
    return this.db.collection('users').doc(userKey).set(value);
  }

  deleteUser(userKey) {
    return this.db.collection('users').doc(userKey).delete();
  }

  getUsers() {
    return this.db.collection('users').snapshotChanges();
  }

  searchUsers(searchValue) {
    return this.db.collection('users', ref => ref.where('nameToSearch', '>=', searchValue)
      .where('nameToSearch', '<=', searchValue + '\uf8ff'))
      .snapshotChanges()
  }

  searchUsersByAge(value) {
    return this.db.collection('users', ref => ref.orderBy('age').startAt(value)).snapshotChanges();
  }


  createUser(value, avatar) {
    return this.db.collection('users').add({
      name: value.name,
      nameToSearch: value.name.toLowerCase(),
      surname: value.surname,
      age: parseInt(value.age),
      avatar: avatar
    });
  }

  createUser2(fname, lname, email, contact, dob, clg, br, deg, intIn, refCode) {
    return this.db.collection('users').add({
      fname: fname,
      lname: lname,
      email: email,
      contact: contact,
      dob: dob,
      clg: clg,
      br: br,
      deg: deg,
      intIn: intIn,
      refCode: refCode
    });
  }

  createUser3(email) {
    return this.db.collection('users').add({
      email: email,
      time: Date()
    });
  }

  contactus(fname, lname, email, msg) {
    return this.db.collection('contactus').add({
      fname: fname,
      lname: lname,
      email: email,
      msg: msg
    });
  }
  postFeebBack(fname, lname, email, phone, dob, city, qualification,
    currentJob,
    courseToTeach,
    msg
  ) {
    return this.db.collection('feedBack').add({
      fname: fname,
      lname: lname,
      phone: phone,
      email: email,
      dob: dob,
      city: city,
      qualification: qualification,
      currentJob: currentJob,
      courseToTeach: courseToTeach,
      purpose: msg


    });
  }

  postFeebBack2(name, email, phone) {
    return this.db.collection('enrollStud').add({
      fname: name,
      phone: phone,
      email: email
    });
  }

  enqEarnnLearn(fname, lname, phone, email, dob,
    city, currentYear, collageName, msg) {
    return this.db.collection('enqearnlearn').add({
      fname: fname,
      lname: lname,
      phone: phone,
      email: email,
      dob: dob,
      collageName: collageName,
      currentYear: currentYear,
      city: city,
      msg: msg
    });
  }

  postFeebBack3(fname, lname, email, phone) {
    return this.db.collection('enrollStud2').add({
      fname: fname,
      lname: lname,
      phone: phone,
      email: email

    });
  }

  enqSend(fname, lname, phone, email, collageName, city, desig, msg) {
    return this.db.collection('enqform').add({
      fname: fname,
      lname: lname,
      phone: phone,
      email: email,
      collageName: collageName,
      city: city,
      desig: desig,
      msg: msg
    });
  }

  getFees(cName) {
    return this.db.collection('courses', ref => ref.where('cName', '==', cName)).snapshotChanges();
  }

  getUserReg(email) {
    return this.db.collection('users', ref => ref.where('email', '==', email)).snapshotChanges();
  }

  getRes(email, exam) {
    return this.db.collection('results', ref => ref.where('e', '==', email).where('t', '==', exam)).snapshotChanges();
  }

  addRes(email, exam, marks) {
    return this.db.collection('results').add({
      t: exam,
      e: email,
      m: marks
    });
  }

  applyRefCode(email, code, course, payId, amount) {
    return this.db.collection('refers').add({
      email: email,
      code: code,
      course: course,
      time: Date(),
      payId: payId,
      amount: amount
    });
  }

  enrStats(email) {
    return this.db.collection('paySuccess', ref => ref.where('email', '==', email)).snapshotChanges();
  }

  internshipEnquire(fname, lname, phone, email, collegeName, year, projectType, degree) {
    return this.db.collection('internEnq').add({
      fname: fname,
      lname: lname,
      phone: phone,
      email: email,
      collegeName: collegeName,
      year: year,
      projectType: projectType,
      degree: degree
    });
  }

  scholarshipReg(fname, lname, phone, dob, email, collegeName, instaId, pass, intIn) {
    return this.db.collection('scholarshipReg').add({
      fname: fname,
      lname: lname,
      dob: dob,
      phone: phone,
      email: email,
      collegeName: collegeName,
      instaId: instaId,
      pass: pass,
      intIn: intIn
    });
  }

  paySuccess(payId, email, course, fees) {
    return this.db.collection('paySuccess').add({
      payId: payId,
      email: email,
      course: course,
      fees: fees,
      time: new Date()
    });
  }

  payMailSuccess(payId, email, course, fees, name) {
    return this.db.collection('mail').add({
      // payId: payId,
      // email: email,
      // course: course,
      // fees: fees,
      // time: new Date()
      to: email,
      message: {
        subject: 'Gyanarpan ',
        html: 'Dear ' + name + ',<br>' + 'Thank you for registering for ' + course + '.<br>' + 'We have received your payment for ' + fees / 100 + ' that you submitted on ' + new Date() + '. The payment has been authorized and approved. If you have any questions, feel free to reply to this mail.<br>' + 'We are looking forward to an exciting program ahead!<br>' + 'Best regards,<br>' + 'Gyanarpan'
      }
    });
  }

  loginSuccessMail(email, name) {
    return this.db.collection('mail').add({
      to: email,
      message: {
        subject: 'Login Alert',
        html: 'Dear ' + name + ',<br>' + 'You login request is approved for Gyanarpan on ' + new Date() + '<br>' + 'Best regards,<br>' + 'Gyanarpan'
      }
    });
  }

  joinCoor(fname, lname, email, phone, city) {
    return this.db.collection('join-coor').add({
      fname: fname,
      lname: lname,
      phone: phone,
      email: email,
      College: city
    });
  }

  getAllExams() {
    return this.db.collection("allExams").snapshotChanges();
  }

  chkExam(email) {
    return this.db.collection('exam-1feb', ref => ref.where('e', '==', email)).snapshotChanges();
  }

}
