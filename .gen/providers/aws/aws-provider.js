"use strict";
// https://www.terraform.io/docs/providers/aws
// generated from terraform resource schema
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.AwsProvider = exports.AwsProviderIgnoreTagsOutputReference = exports.AwsProviderDefaultTagsOutputReference = exports.AwsProviderAssumeRoleOutputReference = void 0;
var cdktf = require("cdktf");
function awsProviderAssumeRoleToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        duration_seconds: cdktf.numberToTerraform(struct.durationSeconds),
        external_id: cdktf.stringToTerraform(struct.externalId),
        policy: cdktf.stringToTerraform(struct.policy),
        policy_arns: cdktf.listMapper(cdktf.stringToTerraform)(struct.policyArns),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        session_name: cdktf.stringToTerraform(struct.sessionName),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(struct.tags),
        transitive_tag_keys: cdktf.listMapper(cdktf.stringToTerraform)(struct.transitiveTagKeys)
    };
}
var AwsProviderAssumeRoleOutputReference = /** @class */ (function (_super) {
    __extends(AwsProviderAssumeRoleOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    function AwsProviderAssumeRoleOutputReference(terraformResource, terraformAttribute, isSingleItem) {
        return _super.call(this, terraformResource, terraformAttribute, isSingleItem) || this;
    }
    Object.defineProperty(AwsProviderAssumeRoleOutputReference.prototype, "durationSeconds", {
        get: function () {
            return this._durationSeconds;
        },
        set: function (value) {
            this._durationSeconds = value;
        },
        enumerable: false,
        configurable: true
    });
    AwsProviderAssumeRoleOutputReference.prototype.resetDurationSeconds = function () {
        this._durationSeconds = undefined;
    };
    Object.defineProperty(AwsProviderAssumeRoleOutputReference.prototype, "durationSecondsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._durationSeconds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AwsProviderAssumeRoleOutputReference.prototype, "externalId", {
        get: function () {
            return this._externalId;
        },
        set: function (value) {
            this._externalId = value;
        },
        enumerable: false,
        configurable: true
    });
    AwsProviderAssumeRoleOutputReference.prototype.resetExternalId = function () {
        this._externalId = undefined;
    };
    Object.defineProperty(AwsProviderAssumeRoleOutputReference.prototype, "externalIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._externalId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AwsProviderAssumeRoleOutputReference.prototype, "policy", {
        get: function () {
            return this._policy;
        },
        set: function (value) {
            this._policy = value;
        },
        enumerable: false,
        configurable: true
    });
    AwsProviderAssumeRoleOutputReference.prototype.resetPolicy = function () {
        this._policy = undefined;
    };
    Object.defineProperty(AwsProviderAssumeRoleOutputReference.prototype, "policyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._policy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AwsProviderAssumeRoleOutputReference.prototype, "policyArns", {
        get: function () {
            return this._policyArns;
        },
        set: function (value) {
            this._policyArns = value;
        },
        enumerable: false,
        configurable: true
    });
    AwsProviderAssumeRoleOutputReference.prototype.resetPolicyArns = function () {
        this._policyArns = undefined;
    };
    Object.defineProperty(AwsProviderAssumeRoleOutputReference.prototype, "policyArnsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._policyArns;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AwsProviderAssumeRoleOutputReference.prototype, "roleArn", {
        get: function () {
            return this._roleArn;
        },
        set: function (value) {
            this._roleArn = value;
        },
        enumerable: false,
        configurable: true
    });
    AwsProviderAssumeRoleOutputReference.prototype.resetRoleArn = function () {
        this._roleArn = undefined;
    };
    Object.defineProperty(AwsProviderAssumeRoleOutputReference.prototype, "roleArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._roleArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AwsProviderAssumeRoleOutputReference.prototype, "sessionName", {
        get: function () {
            return this._sessionName;
        },
        set: function (value) {
            this._sessionName = value;
        },
        enumerable: false,
        configurable: true
    });
    AwsProviderAssumeRoleOutputReference.prototype.resetSessionName = function () {
        this._sessionName = undefined;
    };
    Object.defineProperty(AwsProviderAssumeRoleOutputReference.prototype, "sessionNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sessionName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AwsProviderAssumeRoleOutputReference.prototype, "tags", {
        get: function () {
            return this._tags;
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    AwsProviderAssumeRoleOutputReference.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(AwsProviderAssumeRoleOutputReference.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AwsProviderAssumeRoleOutputReference.prototype, "transitiveTagKeys", {
        get: function () {
            return this._transitiveTagKeys;
        },
        set: function (value) {
            this._transitiveTagKeys = value;
        },
        enumerable: false,
        configurable: true
    });
    AwsProviderAssumeRoleOutputReference.prototype.resetTransitiveTagKeys = function () {
        this._transitiveTagKeys = undefined;
    };
    Object.defineProperty(AwsProviderAssumeRoleOutputReference.prototype, "transitiveTagKeysInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._transitiveTagKeys;
        },
        enumerable: false,
        configurable: true
    });
    return AwsProviderAssumeRoleOutputReference;
}(cdktf.ComplexObject));
exports.AwsProviderAssumeRoleOutputReference = AwsProviderAssumeRoleOutputReference;
function awsProviderDefaultTagsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(struct.tags)
    };
}
var AwsProviderDefaultTagsOutputReference = /** @class */ (function (_super) {
    __extends(AwsProviderDefaultTagsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    function AwsProviderDefaultTagsOutputReference(terraformResource, terraformAttribute, isSingleItem) {
        return _super.call(this, terraformResource, terraformAttribute, isSingleItem) || this;
    }
    Object.defineProperty(AwsProviderDefaultTagsOutputReference.prototype, "tags", {
        get: function () {
            return this._tags;
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    AwsProviderDefaultTagsOutputReference.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(AwsProviderDefaultTagsOutputReference.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    return AwsProviderDefaultTagsOutputReference;
}(cdktf.ComplexObject));
exports.AwsProviderDefaultTagsOutputReference = AwsProviderDefaultTagsOutputReference;
function awsProviderEndpointsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        accessanalyzer: cdktf.stringToTerraform(struct.accessanalyzer),
        acm: cdktf.stringToTerraform(struct.acm),
        acmpca: cdktf.stringToTerraform(struct.acmpca),
        alexaforbusiness: cdktf.stringToTerraform(struct.alexaforbusiness),
        amp: cdktf.stringToTerraform(struct.amp),
        amplify: cdktf.stringToTerraform(struct.amplify),
        amplifybackend: cdktf.stringToTerraform(struct.amplifybackend),
        apigateway: cdktf.stringToTerraform(struct.apigateway),
        apigatewayv2: cdktf.stringToTerraform(struct.apigatewayv2),
        appautoscaling: cdktf.stringToTerraform(struct.appautoscaling),
        appconfig: cdktf.stringToTerraform(struct.appconfig),
        appflow: cdktf.stringToTerraform(struct.appflow),
        appintegrations: cdktf.stringToTerraform(struct.appintegrations),
        appintegrationsservice: cdktf.stringToTerraform(struct.appintegrationsservice),
        applicationautoscaling: cdktf.stringToTerraform(struct.applicationautoscaling),
        applicationcostprofiler: cdktf.stringToTerraform(struct.applicationcostprofiler),
        applicationdiscovery: cdktf.stringToTerraform(struct.applicationdiscovery),
        applicationdiscoveryservice: cdktf.stringToTerraform(struct.applicationdiscoveryservice),
        applicationinsights: cdktf.stringToTerraform(struct.applicationinsights),
        appmesh: cdktf.stringToTerraform(struct.appmesh),
        appregistry: cdktf.stringToTerraform(struct.appregistry),
        apprunner: cdktf.stringToTerraform(struct.apprunner),
        appstream: cdktf.stringToTerraform(struct.appstream),
        appsync: cdktf.stringToTerraform(struct.appsync),
        athena: cdktf.stringToTerraform(struct.athena),
        auditmanager: cdktf.stringToTerraform(struct.auditmanager),
        augmentedairuntime: cdktf.stringToTerraform(struct.augmentedairuntime),
        autoscaling: cdktf.stringToTerraform(struct.autoscaling),
        autoscalingplans: cdktf.stringToTerraform(struct.autoscalingplans),
        backup: cdktf.stringToTerraform(struct.backup),
        batch: cdktf.stringToTerraform(struct.batch),
        braket: cdktf.stringToTerraform(struct.braket),
        budgets: cdktf.stringToTerraform(struct.budgets),
        chime: cdktf.stringToTerraform(struct.chime),
        cloud9: cdktf.stringToTerraform(struct.cloud9),
        cloudcontrol: cdktf.stringToTerraform(struct.cloudcontrol),
        cloudcontrolapi: cdktf.stringToTerraform(struct.cloudcontrolapi),
        clouddirectory: cdktf.stringToTerraform(struct.clouddirectory),
        cloudformation: cdktf.stringToTerraform(struct.cloudformation),
        cloudfront: cdktf.stringToTerraform(struct.cloudfront),
        cloudhsm: cdktf.stringToTerraform(struct.cloudhsm),
        cloudhsmv2: cdktf.stringToTerraform(struct.cloudhsmv2),
        cloudsearch: cdktf.stringToTerraform(struct.cloudsearch),
        cloudsearchdomain: cdktf.stringToTerraform(struct.cloudsearchdomain),
        cloudtrail: cdktf.stringToTerraform(struct.cloudtrail),
        cloudwatch: cdktf.stringToTerraform(struct.cloudwatch),
        cloudwatchevents: cdktf.stringToTerraform(struct.cloudwatchevents),
        cloudwatchlogs: cdktf.stringToTerraform(struct.cloudwatchlogs),
        codeartifact: cdktf.stringToTerraform(struct.codeartifact),
        codebuild: cdktf.stringToTerraform(struct.codebuild),
        codecommit: cdktf.stringToTerraform(struct.codecommit),
        codedeploy: cdktf.stringToTerraform(struct.codedeploy),
        codeguruprofiler: cdktf.stringToTerraform(struct.codeguruprofiler),
        codegurureviewer: cdktf.stringToTerraform(struct.codegurureviewer),
        codepipeline: cdktf.stringToTerraform(struct.codepipeline),
        codestar: cdktf.stringToTerraform(struct.codestar),
        codestarconnections: cdktf.stringToTerraform(struct.codestarconnections),
        codestarnotifications: cdktf.stringToTerraform(struct.codestarnotifications),
        cognitoidentity: cdktf.stringToTerraform(struct.cognitoidentity),
        cognitoidentityprovider: cdktf.stringToTerraform(struct.cognitoidentityprovider),
        cognitoidp: cdktf.stringToTerraform(struct.cognitoidp),
        cognitosync: cdktf.stringToTerraform(struct.cognitosync),
        comprehend: cdktf.stringToTerraform(struct.comprehend),
        comprehendmedical: cdktf.stringToTerraform(struct.comprehendmedical),
        config: cdktf.stringToTerraform(struct.config),
        configservice: cdktf.stringToTerraform(struct.configservice),
        connect: cdktf.stringToTerraform(struct.connect),
        connectcontactlens: cdktf.stringToTerraform(struct.connectcontactlens),
        connectparticipant: cdktf.stringToTerraform(struct.connectparticipant),
        costandusagereportservice: cdktf.stringToTerraform(struct.costandusagereportservice),
        costexplorer: cdktf.stringToTerraform(struct.costexplorer),
        cur: cdktf.stringToTerraform(struct.cur),
        databasemigration: cdktf.stringToTerraform(struct.databasemigration),
        databasemigrationservice: cdktf.stringToTerraform(struct.databasemigrationservice),
        dataexchange: cdktf.stringToTerraform(struct.dataexchange),
        datapipeline: cdktf.stringToTerraform(struct.datapipeline),
        datasync: cdktf.stringToTerraform(struct.datasync),
        dax: cdktf.stringToTerraform(struct.dax),
        detective: cdktf.stringToTerraform(struct.detective),
        devicefarm: cdktf.stringToTerraform(struct.devicefarm),
        devopsguru: cdktf.stringToTerraform(struct.devopsguru),
        directconnect: cdktf.stringToTerraform(struct.directconnect),
        dlm: cdktf.stringToTerraform(struct.dlm),
        dms: cdktf.stringToTerraform(struct.dms),
        docdb: cdktf.stringToTerraform(struct.docdb),
        ds: cdktf.stringToTerraform(struct.ds),
        dynamodb: cdktf.stringToTerraform(struct.dynamodb),
        dynamodbstreams: cdktf.stringToTerraform(struct.dynamodbstreams),
        ec2: cdktf.stringToTerraform(struct.ec2),
        ec2instanceconnect: cdktf.stringToTerraform(struct.ec2Instanceconnect),
        ecr: cdktf.stringToTerraform(struct.ecr),
        ecrpublic: cdktf.stringToTerraform(struct.ecrpublic),
        ecs: cdktf.stringToTerraform(struct.ecs),
        efs: cdktf.stringToTerraform(struct.efs),
        eks: cdktf.stringToTerraform(struct.eks),
        elasticache: cdktf.stringToTerraform(struct.elasticache),
        elasticbeanstalk: cdktf.stringToTerraform(struct.elasticbeanstalk),
        elasticinference: cdktf.stringToTerraform(struct.elasticinference),
        elasticsearch: cdktf.stringToTerraform(struct.elasticsearch),
        elasticsearchservice: cdktf.stringToTerraform(struct.elasticsearchservice),
        elastictranscoder: cdktf.stringToTerraform(struct.elastictranscoder),
        elb: cdktf.stringToTerraform(struct.elb),
        elbv2: cdktf.stringToTerraform(struct.elbv2),
        emr: cdktf.stringToTerraform(struct.emr),
        emrcontainers: cdktf.stringToTerraform(struct.emrcontainers),
        es: cdktf.stringToTerraform(struct.es),
        eventbridge: cdktf.stringToTerraform(struct.eventbridge),
        events: cdktf.stringToTerraform(struct.events),
        finspace: cdktf.stringToTerraform(struct.finspace),
        finspacedata: cdktf.stringToTerraform(struct.finspacedata),
        firehose: cdktf.stringToTerraform(struct.firehose),
        fis: cdktf.stringToTerraform(struct.fis),
        fms: cdktf.stringToTerraform(struct.fms),
        forecast: cdktf.stringToTerraform(struct.forecast),
        forecastquery: cdktf.stringToTerraform(struct.forecastquery),
        forecastqueryservice: cdktf.stringToTerraform(struct.forecastqueryservice),
        forecastservice: cdktf.stringToTerraform(struct.forecastservice),
        frauddetector: cdktf.stringToTerraform(struct.frauddetector),
        fsx: cdktf.stringToTerraform(struct.fsx),
        gamelift: cdktf.stringToTerraform(struct.gamelift),
        glacier: cdktf.stringToTerraform(struct.glacier),
        globalaccelerator: cdktf.stringToTerraform(struct.globalaccelerator),
        glue: cdktf.stringToTerraform(struct.glue),
        gluedatabrew: cdktf.stringToTerraform(struct.gluedatabrew),
        greengrass: cdktf.stringToTerraform(struct.greengrass),
        greengrassv2: cdktf.stringToTerraform(struct.greengrassv2),
        groundstation: cdktf.stringToTerraform(struct.groundstation),
        guardduty: cdktf.stringToTerraform(struct.guardduty),
        health: cdktf.stringToTerraform(struct.health),
        healthlake: cdktf.stringToTerraform(struct.healthlake),
        honeycode: cdktf.stringToTerraform(struct.honeycode),
        iam: cdktf.stringToTerraform(struct.iam),
        identitystore: cdktf.stringToTerraform(struct.identitystore),
        imagebuilder: cdktf.stringToTerraform(struct.imagebuilder),
        inspector: cdktf.stringToTerraform(struct.inspector),
        iot: cdktf.stringToTerraform(struct.iot),
        iot1clickdevices: cdktf.stringToTerraform(struct.iot1Clickdevices),
        iot1clickdevicesservice: cdktf.stringToTerraform(struct.iot1Clickdevicesservice),
        iot1clickprojects: cdktf.stringToTerraform(struct.iot1Clickprojects),
        iotanalytics: cdktf.stringToTerraform(struct.iotanalytics),
        iotdataplane: cdktf.stringToTerraform(struct.iotdataplane),
        iotdeviceadvisor: cdktf.stringToTerraform(struct.iotdeviceadvisor),
        iotevents: cdktf.stringToTerraform(struct.iotevents),
        ioteventsdata: cdktf.stringToTerraform(struct.ioteventsdata),
        iotfleethub: cdktf.stringToTerraform(struct.iotfleethub),
        iotjobsdataplane: cdktf.stringToTerraform(struct.iotjobsdataplane),
        iotsecuretunneling: cdktf.stringToTerraform(struct.iotsecuretunneling),
        iotsitewise: cdktf.stringToTerraform(struct.iotsitewise),
        iotthingsgraph: cdktf.stringToTerraform(struct.iotthingsgraph),
        iotwireless: cdktf.stringToTerraform(struct.iotwireless),
        kafka: cdktf.stringToTerraform(struct.kafka),
        kendra: cdktf.stringToTerraform(struct.kendra),
        kinesis: cdktf.stringToTerraform(struct.kinesis),
        kinesisanalytics: cdktf.stringToTerraform(struct.kinesisanalytics),
        kinesisanalyticsv2: cdktf.stringToTerraform(struct.kinesisanalyticsv2),
        kinesisvideo: cdktf.stringToTerraform(struct.kinesisvideo),
        kinesisvideoarchivedmedia: cdktf.stringToTerraform(struct.kinesisvideoarchivedmedia),
        kinesisvideomedia: cdktf.stringToTerraform(struct.kinesisvideomedia),
        kinesisvideosignalingchannels: cdktf.stringToTerraform(struct.kinesisvideosignalingchannels),
        kms: cdktf.stringToTerraform(struct.kms),
        lakeformation: cdktf.stringToTerraform(struct.lakeformation),
        lambda: cdktf.stringToTerraform(struct.lambda),
        lexmodelbuilding: cdktf.stringToTerraform(struct.lexmodelbuilding),
        lexmodelbuildingservice: cdktf.stringToTerraform(struct.lexmodelbuildingservice),
        lexmodels: cdktf.stringToTerraform(struct.lexmodels),
        lexmodelsv2: cdktf.stringToTerraform(struct.lexmodelsv2),
        lexruntime: cdktf.stringToTerraform(struct.lexruntime),
        lexruntimeservice: cdktf.stringToTerraform(struct.lexruntimeservice),
        lexruntimev2: cdktf.stringToTerraform(struct.lexruntimev2),
        licensemanager: cdktf.stringToTerraform(struct.licensemanager),
        lightsail: cdktf.stringToTerraform(struct.lightsail),
        location: cdktf.stringToTerraform(struct.location),
        lookoutequipment: cdktf.stringToTerraform(struct.lookoutequipment),
        lookoutforvision: cdktf.stringToTerraform(struct.lookoutforvision),
        lookoutmetrics: cdktf.stringToTerraform(struct.lookoutmetrics),
        machinelearning: cdktf.stringToTerraform(struct.machinelearning),
        macie: cdktf.stringToTerraform(struct.macie),
        macie2: cdktf.stringToTerraform(struct.macie2),
        managedblockchain: cdktf.stringToTerraform(struct.managedblockchain),
        marketplacecatalog: cdktf.stringToTerraform(struct.marketplacecatalog),
        marketplacecommerceanalytics: cdktf.stringToTerraform(struct.marketplacecommerceanalytics),
        marketplaceentitlement: cdktf.stringToTerraform(struct.marketplaceentitlement),
        marketplaceentitlementservice: cdktf.stringToTerraform(struct.marketplaceentitlementservice),
        marketplacemetering: cdktf.stringToTerraform(struct.marketplacemetering),
        mediaconnect: cdktf.stringToTerraform(struct.mediaconnect),
        mediaconvert: cdktf.stringToTerraform(struct.mediaconvert),
        medialive: cdktf.stringToTerraform(struct.medialive),
        mediapackage: cdktf.stringToTerraform(struct.mediapackage),
        mediapackagevod: cdktf.stringToTerraform(struct.mediapackagevod),
        mediastore: cdktf.stringToTerraform(struct.mediastore),
        mediastoredata: cdktf.stringToTerraform(struct.mediastoredata),
        mediatailor: cdktf.stringToTerraform(struct.mediatailor),
        memorydb: cdktf.stringToTerraform(struct.memorydb),
        mgn: cdktf.stringToTerraform(struct.mgn),
        migrationhub: cdktf.stringToTerraform(struct.migrationhub),
        migrationhubconfig: cdktf.stringToTerraform(struct.migrationhubconfig),
        mobile: cdktf.stringToTerraform(struct.mobile),
        mobileanalytics: cdktf.stringToTerraform(struct.mobileanalytics),
        mq: cdktf.stringToTerraform(struct.mq),
        mturk: cdktf.stringToTerraform(struct.mturk),
        mwaa: cdktf.stringToTerraform(struct.mwaa),
        neptune: cdktf.stringToTerraform(struct.neptune),
        networkfirewall: cdktf.stringToTerraform(struct.networkfirewall),
        networkmanager: cdktf.stringToTerraform(struct.networkmanager),
        nimblestudio: cdktf.stringToTerraform(struct.nimblestudio),
        opsworks: cdktf.stringToTerraform(struct.opsworks),
        opsworkscm: cdktf.stringToTerraform(struct.opsworkscm),
        organizations: cdktf.stringToTerraform(struct.organizations),
        outposts: cdktf.stringToTerraform(struct.outposts),
        personalize: cdktf.stringToTerraform(struct.personalize),
        personalizeevents: cdktf.stringToTerraform(struct.personalizeevents),
        personalizeruntime: cdktf.stringToTerraform(struct.personalizeruntime),
        pi: cdktf.stringToTerraform(struct.pi),
        pinpoint: cdktf.stringToTerraform(struct.pinpoint),
        pinpointemail: cdktf.stringToTerraform(struct.pinpointemail),
        pinpointsmsvoice: cdktf.stringToTerraform(struct.pinpointsmsvoice),
        polly: cdktf.stringToTerraform(struct.polly),
        pricing: cdktf.stringToTerraform(struct.pricing),
        prometheus: cdktf.stringToTerraform(struct.prometheus),
        prometheusservice: cdktf.stringToTerraform(struct.prometheusservice),
        proton: cdktf.stringToTerraform(struct.proton),
        qldb: cdktf.stringToTerraform(struct.qldb),
        qldbsession: cdktf.stringToTerraform(struct.qldbsession),
        quicksight: cdktf.stringToTerraform(struct.quicksight),
        ram: cdktf.stringToTerraform(struct.ram),
        rds: cdktf.stringToTerraform(struct.rds),
        rdsdata: cdktf.stringToTerraform(struct.rdsdata),
        rdsdataservice: cdktf.stringToTerraform(struct.rdsdataservice),
        redshift: cdktf.stringToTerraform(struct.redshift),
        redshiftdata: cdktf.stringToTerraform(struct.redshiftdata),
        rekognition: cdktf.stringToTerraform(struct.rekognition),
        resourcegroups: cdktf.stringToTerraform(struct.resourcegroups),
        resourcegroupstagging: cdktf.stringToTerraform(struct.resourcegroupstagging),
        resourcegroupstaggingapi: cdktf.stringToTerraform(struct.resourcegroupstaggingapi),
        robomaker: cdktf.stringToTerraform(struct.robomaker),
        route53: cdktf.stringToTerraform(struct.route53),
        route53domains: cdktf.stringToTerraform(struct.route53Domains),
        route53recoverycontrolconfig: cdktf.stringToTerraform(struct.route53Recoverycontrolconfig),
        route53recoveryreadiness: cdktf.stringToTerraform(struct.route53Recoveryreadiness),
        route53resolver: cdktf.stringToTerraform(struct.route53Resolver),
        s3: cdktf.stringToTerraform(struct.s3),
        s3control: cdktf.stringToTerraform(struct.s3Control),
        s3outposts: cdktf.stringToTerraform(struct.s3Outposts),
        sagemaker: cdktf.stringToTerraform(struct.sagemaker),
        sagemakeredgemanager: cdktf.stringToTerraform(struct.sagemakeredgemanager),
        sagemakerfeaturestoreruntime: cdktf.stringToTerraform(struct.sagemakerfeaturestoreruntime),
        sagemakerruntime: cdktf.stringToTerraform(struct.sagemakerruntime),
        savingsplans: cdktf.stringToTerraform(struct.savingsplans),
        schemas: cdktf.stringToTerraform(struct.schemas),
        sdb: cdktf.stringToTerraform(struct.sdb),
        secretsmanager: cdktf.stringToTerraform(struct.secretsmanager),
        securityhub: cdktf.stringToTerraform(struct.securityhub),
        serverlessapplicationrepository: cdktf.stringToTerraform(struct.serverlessapplicationrepository),
        serverlessapprepo: cdktf.stringToTerraform(struct.serverlessapprepo),
        serverlessrepo: cdktf.stringToTerraform(struct.serverlessrepo),
        servicecatalog: cdktf.stringToTerraform(struct.servicecatalog),
        servicediscovery: cdktf.stringToTerraform(struct.servicediscovery),
        servicequotas: cdktf.stringToTerraform(struct.servicequotas),
        ses: cdktf.stringToTerraform(struct.ses),
        sesv2: cdktf.stringToTerraform(struct.sesv2),
        sfn: cdktf.stringToTerraform(struct.sfn),
        shield: cdktf.stringToTerraform(struct.shield),
        signer: cdktf.stringToTerraform(struct.signer),
        simpledb: cdktf.stringToTerraform(struct.simpledb),
        sms: cdktf.stringToTerraform(struct.sms),
        snowball: cdktf.stringToTerraform(struct.snowball),
        sns: cdktf.stringToTerraform(struct.sns),
        sqs: cdktf.stringToTerraform(struct.sqs),
        ssm: cdktf.stringToTerraform(struct.ssm),
        ssmcontacts: cdktf.stringToTerraform(struct.ssmcontacts),
        ssmincidents: cdktf.stringToTerraform(struct.ssmincidents),
        sso: cdktf.stringToTerraform(struct.sso),
        ssoadmin: cdktf.stringToTerraform(struct.ssoadmin),
        ssooidc: cdktf.stringToTerraform(struct.ssooidc),
        stepfunctions: cdktf.stringToTerraform(struct.stepfunctions),
        storagegateway: cdktf.stringToTerraform(struct.storagegateway),
        sts: cdktf.stringToTerraform(struct.sts),
        support: cdktf.stringToTerraform(struct.support),
        swf: cdktf.stringToTerraform(struct.swf),
        synthetics: cdktf.stringToTerraform(struct.synthetics),
        textract: cdktf.stringToTerraform(struct.textract),
        timestreamquery: cdktf.stringToTerraform(struct.timestreamquery),
        timestreamwrite: cdktf.stringToTerraform(struct.timestreamwrite),
        transcribe: cdktf.stringToTerraform(struct.transcribe),
        transcribeservice: cdktf.stringToTerraform(struct.transcribeservice),
        transcribestreaming: cdktf.stringToTerraform(struct.transcribestreaming),
        transcribestreamingservice: cdktf.stringToTerraform(struct.transcribestreamingservice),
        transfer: cdktf.stringToTerraform(struct.transfer),
        translate: cdktf.stringToTerraform(struct.translate),
        waf: cdktf.stringToTerraform(struct.waf),
        wafregional: cdktf.stringToTerraform(struct.wafregional),
        wafv2: cdktf.stringToTerraform(struct.wafv2),
        wellarchitected: cdktf.stringToTerraform(struct.wellarchitected),
        workdocs: cdktf.stringToTerraform(struct.workdocs),
        worklink: cdktf.stringToTerraform(struct.worklink),
        workmail: cdktf.stringToTerraform(struct.workmail),
        workmailmessageflow: cdktf.stringToTerraform(struct.workmailmessageflow),
        workspaces: cdktf.stringToTerraform(struct.workspaces),
        xray: cdktf.stringToTerraform(struct.xray)
    };
}
function awsProviderIgnoreTagsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        key_prefixes: cdktf.listMapper(cdktf.stringToTerraform)(struct.keyPrefixes),
        keys: cdktf.listMapper(cdktf.stringToTerraform)(struct.keys)
    };
}
var AwsProviderIgnoreTagsOutputReference = /** @class */ (function (_super) {
    __extends(AwsProviderIgnoreTagsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    function AwsProviderIgnoreTagsOutputReference(terraformResource, terraformAttribute, isSingleItem) {
        return _super.call(this, terraformResource, terraformAttribute, isSingleItem) || this;
    }
    Object.defineProperty(AwsProviderIgnoreTagsOutputReference.prototype, "keyPrefixes", {
        get: function () {
            return this._keyPrefixes;
        },
        set: function (value) {
            this._keyPrefixes = value;
        },
        enumerable: false,
        configurable: true
    });
    AwsProviderIgnoreTagsOutputReference.prototype.resetKeyPrefixes = function () {
        this._keyPrefixes = undefined;
    };
    Object.defineProperty(AwsProviderIgnoreTagsOutputReference.prototype, "keyPrefixesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._keyPrefixes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AwsProviderIgnoreTagsOutputReference.prototype, "keys", {
        get: function () {
            return this._keys;
        },
        set: function (value) {
            this._keys = value;
        },
        enumerable: false,
        configurable: true
    });
    AwsProviderIgnoreTagsOutputReference.prototype.resetKeys = function () {
        this._keys = undefined;
    };
    Object.defineProperty(AwsProviderIgnoreTagsOutputReference.prototype, "keysInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._keys;
        },
        enumerable: false,
        configurable: true
    });
    return AwsProviderIgnoreTagsOutputReference;
}(cdktf.ComplexObject));
exports.AwsProviderIgnoreTagsOutputReference = AwsProviderIgnoreTagsOutputReference;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws aws}
*/
var AwsProvider = /** @class */ (function (_super) {
    __extends(AwsProvider, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws aws} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AwsProviderConfig
    */
    function AwsProvider(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws',
            terraformGeneratorMetadata: {
                providerName: 'aws',
                providerVersionConstraint: '~> 3.0'
            },
            terraformProviderSource: 'aws'
        }) || this;
        _this._accessKey = config.accessKey;
        _this._allowedAccountIds = config.allowedAccountIds;
        _this._forbiddenAccountIds = config.forbiddenAccountIds;
        _this._httpProxy = config.httpProxy;
        _this._insecure = config.insecure;
        _this._maxRetries = config.maxRetries;
        _this._profile = config.profile;
        _this._region = config.region;
        _this._s3ForcePathStyle = config.s3ForcePathStyle;
        _this._secretKey = config.secretKey;
        _this._sharedCredentialsFile = config.sharedCredentialsFile;
        _this._skipCredentialsValidation = config.skipCredentialsValidation;
        _this._skipGetEc2Platforms = config.skipGetEc2Platforms;
        _this._skipMetadataApiCheck = config.skipMetadataApiCheck;
        _this._skipRegionValidation = config.skipRegionValidation;
        _this._skipRequestingAccountId = config.skipRequestingAccountId;
        _this._token = config.token;
        _this._alias = config.alias;
        _this._assumeRole = config.assumeRole;
        _this._defaultTags = config.defaultTags;
        _this._endpoints = config.endpoints;
        _this._ignoreTags = config.ignoreTags;
        return _this;
    }
    Object.defineProperty(AwsProvider.prototype, "accessKey", {
        get: function () {
            return this._accessKey;
        },
        set: function (value) {
            this._accessKey = value;
        },
        enumerable: false,
        configurable: true
    });
    AwsProvider.prototype.resetAccessKey = function () {
        this._accessKey = undefined;
    };
    Object.defineProperty(AwsProvider.prototype, "accessKeyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accessKey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AwsProvider.prototype, "allowedAccountIds", {
        get: function () {
            return this._allowedAccountIds;
        },
        set: function (value) {
            this._allowedAccountIds = value;
        },
        enumerable: false,
        configurable: true
    });
    AwsProvider.prototype.resetAllowedAccountIds = function () {
        this._allowedAccountIds = undefined;
    };
    Object.defineProperty(AwsProvider.prototype, "allowedAccountIdsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._allowedAccountIds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AwsProvider.prototype, "forbiddenAccountIds", {
        get: function () {
            return this._forbiddenAccountIds;
        },
        set: function (value) {
            this._forbiddenAccountIds = value;
        },
        enumerable: false,
        configurable: true
    });
    AwsProvider.prototype.resetForbiddenAccountIds = function () {
        this._forbiddenAccountIds = undefined;
    };
    Object.defineProperty(AwsProvider.prototype, "forbiddenAccountIdsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._forbiddenAccountIds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AwsProvider.prototype, "httpProxy", {
        get: function () {
            return this._httpProxy;
        },
        set: function (value) {
            this._httpProxy = value;
        },
        enumerable: false,
        configurable: true
    });
    AwsProvider.prototype.resetHttpProxy = function () {
        this._httpProxy = undefined;
    };
    Object.defineProperty(AwsProvider.prototype, "httpProxyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._httpProxy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AwsProvider.prototype, "insecure", {
        get: function () {
            return this._insecure;
        },
        set: function (value) {
            this._insecure = value;
        },
        enumerable: false,
        configurable: true
    });
    AwsProvider.prototype.resetInsecure = function () {
        this._insecure = undefined;
    };
    Object.defineProperty(AwsProvider.prototype, "insecureInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._insecure;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AwsProvider.prototype, "maxRetries", {
        get: function () {
            return this._maxRetries;
        },
        set: function (value) {
            this._maxRetries = value;
        },
        enumerable: false,
        configurable: true
    });
    AwsProvider.prototype.resetMaxRetries = function () {
        this._maxRetries = undefined;
    };
    Object.defineProperty(AwsProvider.prototype, "maxRetriesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxRetries;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AwsProvider.prototype, "profile", {
        get: function () {
            return this._profile;
        },
        set: function (value) {
            this._profile = value;
        },
        enumerable: false,
        configurable: true
    });
    AwsProvider.prototype.resetProfile = function () {
        this._profile = undefined;
    };
    Object.defineProperty(AwsProvider.prototype, "profileInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._profile;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AwsProvider.prototype, "region", {
        get: function () {
            return this._region;
        },
        set: function (value) {
            this._region = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AwsProvider.prototype, "regionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._region;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AwsProvider.prototype, "s3ForcePathStyle", {
        get: function () {
            return this._s3ForcePathStyle;
        },
        set: function (value) {
            this._s3ForcePathStyle = value;
        },
        enumerable: false,
        configurable: true
    });
    AwsProvider.prototype.resetS3ForcePathStyle = function () {
        this._s3ForcePathStyle = undefined;
    };
    Object.defineProperty(AwsProvider.prototype, "s3ForcePathStyleInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._s3ForcePathStyle;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AwsProvider.prototype, "secretKey", {
        get: function () {
            return this._secretKey;
        },
        set: function (value) {
            this._secretKey = value;
        },
        enumerable: false,
        configurable: true
    });
    AwsProvider.prototype.resetSecretKey = function () {
        this._secretKey = undefined;
    };
    Object.defineProperty(AwsProvider.prototype, "secretKeyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._secretKey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AwsProvider.prototype, "sharedCredentialsFile", {
        get: function () {
            return this._sharedCredentialsFile;
        },
        set: function (value) {
            this._sharedCredentialsFile = value;
        },
        enumerable: false,
        configurable: true
    });
    AwsProvider.prototype.resetSharedCredentialsFile = function () {
        this._sharedCredentialsFile = undefined;
    };
    Object.defineProperty(AwsProvider.prototype, "sharedCredentialsFileInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sharedCredentialsFile;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AwsProvider.prototype, "skipCredentialsValidation", {
        get: function () {
            return this._skipCredentialsValidation;
        },
        set: function (value) {
            this._skipCredentialsValidation = value;
        },
        enumerable: false,
        configurable: true
    });
    AwsProvider.prototype.resetSkipCredentialsValidation = function () {
        this._skipCredentialsValidation = undefined;
    };
    Object.defineProperty(AwsProvider.prototype, "skipCredentialsValidationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._skipCredentialsValidation;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AwsProvider.prototype, "skipGetEc2Platforms", {
        get: function () {
            return this._skipGetEc2Platforms;
        },
        set: function (value) {
            this._skipGetEc2Platforms = value;
        },
        enumerable: false,
        configurable: true
    });
    AwsProvider.prototype.resetSkipGetEc2Platforms = function () {
        this._skipGetEc2Platforms = undefined;
    };
    Object.defineProperty(AwsProvider.prototype, "skipGetEc2PlatformsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._skipGetEc2Platforms;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AwsProvider.prototype, "skipMetadataApiCheck", {
        get: function () {
            return this._skipMetadataApiCheck;
        },
        set: function (value) {
            this._skipMetadataApiCheck = value;
        },
        enumerable: false,
        configurable: true
    });
    AwsProvider.prototype.resetSkipMetadataApiCheck = function () {
        this._skipMetadataApiCheck = undefined;
    };
    Object.defineProperty(AwsProvider.prototype, "skipMetadataApiCheckInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._skipMetadataApiCheck;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AwsProvider.prototype, "skipRegionValidation", {
        get: function () {
            return this._skipRegionValidation;
        },
        set: function (value) {
            this._skipRegionValidation = value;
        },
        enumerable: false,
        configurable: true
    });
    AwsProvider.prototype.resetSkipRegionValidation = function () {
        this._skipRegionValidation = undefined;
    };
    Object.defineProperty(AwsProvider.prototype, "skipRegionValidationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._skipRegionValidation;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AwsProvider.prototype, "skipRequestingAccountId", {
        get: function () {
            return this._skipRequestingAccountId;
        },
        set: function (value) {
            this._skipRequestingAccountId = value;
        },
        enumerable: false,
        configurable: true
    });
    AwsProvider.prototype.resetSkipRequestingAccountId = function () {
        this._skipRequestingAccountId = undefined;
    };
    Object.defineProperty(AwsProvider.prototype, "skipRequestingAccountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._skipRequestingAccountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AwsProvider.prototype, "token", {
        get: function () {
            return this._token;
        },
        set: function (value) {
            this._token = value;
        },
        enumerable: false,
        configurable: true
    });
    AwsProvider.prototype.resetToken = function () {
        this._token = undefined;
    };
    Object.defineProperty(AwsProvider.prototype, "tokenInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._token;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AwsProvider.prototype, "alias", {
        get: function () {
            return this._alias;
        },
        set: function (value) {
            this._alias = value;
        },
        enumerable: false,
        configurable: true
    });
    AwsProvider.prototype.resetAlias = function () {
        this._alias = undefined;
    };
    Object.defineProperty(AwsProvider.prototype, "aliasInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._alias;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AwsProvider.prototype, "assumeRole", {
        get: function () {
            return this._assumeRole;
        },
        set: function (value) {
            this._assumeRole = value;
        },
        enumerable: false,
        configurable: true
    });
    AwsProvider.prototype.resetAssumeRole = function () {
        this._assumeRole = undefined;
    };
    Object.defineProperty(AwsProvider.prototype, "assumeRoleInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._assumeRole;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AwsProvider.prototype, "defaultTags", {
        get: function () {
            return this._defaultTags;
        },
        set: function (value) {
            this._defaultTags = value;
        },
        enumerable: false,
        configurable: true
    });
    AwsProvider.prototype.resetDefaultTags = function () {
        this._defaultTags = undefined;
    };
    Object.defineProperty(AwsProvider.prototype, "defaultTagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._defaultTags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AwsProvider.prototype, "endpoints", {
        get: function () {
            return this._endpoints;
        },
        set: function (value) {
            this._endpoints = value;
        },
        enumerable: false,
        configurable: true
    });
    AwsProvider.prototype.resetEndpoints = function () {
        this._endpoints = undefined;
    };
    Object.defineProperty(AwsProvider.prototype, "endpointsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._endpoints;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AwsProvider.prototype, "ignoreTags", {
        get: function () {
            return this._ignoreTags;
        },
        set: function (value) {
            this._ignoreTags = value;
        },
        enumerable: false,
        configurable: true
    });
    AwsProvider.prototype.resetIgnoreTags = function () {
        this._ignoreTags = undefined;
    };
    Object.defineProperty(AwsProvider.prototype, "ignoreTagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ignoreTags;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    AwsProvider.prototype.synthesizeAttributes = function () {
        return {
            access_key: cdktf.stringToTerraform(this._accessKey),
            allowed_account_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._allowedAccountIds),
            forbidden_account_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._forbiddenAccountIds),
            http_proxy: cdktf.stringToTerraform(this._httpProxy),
            insecure: cdktf.booleanToTerraform(this._insecure),
            max_retries: cdktf.numberToTerraform(this._maxRetries),
            profile: cdktf.stringToTerraform(this._profile),
            region: cdktf.stringToTerraform(this._region),
            s3_force_path_style: cdktf.booleanToTerraform(this._s3ForcePathStyle),
            secret_key: cdktf.stringToTerraform(this._secretKey),
            shared_credentials_file: cdktf.stringToTerraform(this._sharedCredentialsFile),
            skip_credentials_validation: cdktf.booleanToTerraform(this._skipCredentialsValidation),
            skip_get_ec2_platforms: cdktf.booleanToTerraform(this._skipGetEc2Platforms),
            skip_metadata_api_check: cdktf.booleanToTerraform(this._skipMetadataApiCheck),
            skip_region_validation: cdktf.booleanToTerraform(this._skipRegionValidation),
            skip_requesting_account_id: cdktf.booleanToTerraform(this._skipRequestingAccountId),
            token: cdktf.stringToTerraform(this._token),
            alias: cdktf.stringToTerraform(this._alias),
            assume_role: awsProviderAssumeRoleToTerraform(this._assumeRole),
            default_tags: awsProviderDefaultTagsToTerraform(this._defaultTags),
            endpoints: cdktf.listMapper(awsProviderEndpointsToTerraform)(this._endpoints),
            ignore_tags: awsProviderIgnoreTagsToTerraform(this._ignoreTags)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    AwsProvider.tfResourceType = "aws";
    return AwsProvider;
}(cdktf.TerraformProvider));
exports.AwsProvider = AwsProvider;
