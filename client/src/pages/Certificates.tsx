import { useState } from "react";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/fade-in";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, Shield, Award } from "lucide-react";
import { certificates, certificateCategories, Certificate } from "@/data/certificates";

export default function Certificates() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredCertificates = selectedCategory === 'all' 
    ? certificates 
    : certificates.filter(cert => cert.category === selectedCategory);

  const visibleCertificates = filteredCertificates.slice(0, visibleCount);

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 6, filteredCertificates.length));
  };

  const CertificateCard = ({ certificate, index }: { certificate: Certificate; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center ${certificate.color}`}>
            <i className={`${certificate.icon} text-xl`}></i>
          </div>
          <div>
            <h3 className="font-semibold text-slate-800 text-lg leading-tight">{certificate.title}</h3>
            <p className="text-slate-600 text-sm">{certificate.issuer}</p>
          </div>
        </div>
        {certificate.verificationUrl && (
          <motion.a
            href={certificate.verificationUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded-lg bg-indigo-50 text-indigo-600 hover:bg-indigo-100 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        )}
      </div>

      <div className="mb-4">
        <div className="flex items-center space-x-4 text-sm text-slate-500 mb-3">
          <div className="flex items-center space-x-1">
            <Calendar className="w-4 h-4" />
            <span>Issued: {certificate.issueDate}</span>
          </div>
          {certificate.expiryDate && (
            <div className="flex items-center space-x-1">
              <Shield className="w-4 h-4" />
              <span>Expires: {certificate.expiryDate}</span>
            </div>
          )}
        </div>

        {certificate.credentialId && (
          <div className="text-xs text-slate-400 mb-3">
            ID: {certificate.credentialId}
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          {certificate.skills.map((skill, skillIndex) => (
            <Badge 
              key={skillIndex} 
              variant="secondary" 
              className="text-xs bg-slate-100 text-slate-700 hover:bg-slate-200"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <Badge className={certificateCategories.find(cat => cat.id === certificate.category)?.color}>
          {certificateCategories.find(cat => cat.id === certificate.category)?.name}
        </Badge>
        <div className="flex items-center space-x-1 text-indigo-600">
          <Award className="w-4 h-4" />
          <span className="text-sm font-medium">Verified</span>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl mb-6"
            >
              <Award className="w-8 h-8 text-white" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Professional Certificates
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Industry-recognized certifications showcasing expertise across cloud platforms, 
              development frameworks, and emerging technologies.
            </p>
          </div>
        </FadeIn>

        {/* Category Filter */}
        <FadeIn delay={0.2}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <Button
              onClick={() => setSelectedCategory('all')}
              variant={selectedCategory === 'all' ? 'default' : 'outline'}
              className={`${selectedCategory === 'all' 
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white' 
                : 'border-slate-300 text-slate-600 hover:bg-slate-50'
              }`}
            >
              All Certificates ({certificates.length})
            </Button>
            {certificateCategories.map((category) => {
              const count = certificates.filter(cert => cert.category === category.id).length;
              if (count === 0) return null;
              
              return (
                <Button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  variant={selectedCategory === category.id ? 'default' : 'outline'}
                  className={`${selectedCategory === category.id 
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white' 
                    : 'border-slate-300 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {category.name} ({count})
                </Button>
              );
            })}
          </div>
        </FadeIn>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {visibleCertificates.map((certificate, index) => (
            <CertificateCard 
              key={certificate.id} 
              certificate={certificate} 
              index={index} 
            />
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < filteredCertificates.length && (
          <FadeIn>
            <div className="text-center">
              <Button
                onClick={loadMore}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300"
              >
                Load More Certificates ({filteredCertificates.length - visibleCount} remaining)
              </Button>
            </div>
          </FadeIn>
        )}

        {/* Statistics */}
        <FadeIn delay={0.4}>
          <div className="mt-16 bg-white rounded-3xl p-8 shadow-lg border border-slate-200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-2">{certificates.length}</div>
                <div className="text-sm text-slate-600">Total Certificates</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  {certificates.filter(cert => cert.expiryDate).length}
                </div>
                <div className="text-sm text-slate-600">Active Certifications</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {certificateCategories.length - 1}
                </div>
                <div className="text-sm text-slate-600">Skill Areas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {new Set(certificates.flatMap(cert => cert.skills)).size}
                </div>
                <div className="text-sm text-slate-600">Technologies</div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}